import { type BuildOptions } from '../types/config'

export default (options: BuildOptions) => ({
  test: /\.m?(js|jsx|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [options.isDev && require.resolve('react-refresh/babel')].filter(Boolean)
    }
  }
})
