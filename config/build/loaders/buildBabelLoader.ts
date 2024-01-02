import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin'
import { type BuildOptions } from '../types/config'

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx: boolean
}

export default (options: BuildBabelLoaderProps) => ({
  test: options.isTsx ? /\.m?(jsx|tsx)$/ : /\.m?(js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['@babel/preset-env'],
      plugins: [
        options.isDev && require.resolve('react-refresh/babel'),
        ['@babel/plugin-transform-typescript', { isTsx: options.isTsx }],
        '@babel/plugin-transform-runtime',
        options.isTsx && !options.isDev && [
          babelRemovePropsPlugin,
          {
            props: ['data-testid']
          }
        ]
      ].filter(Boolean)
    }
  }
})
