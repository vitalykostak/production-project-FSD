import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'
import buildSassLoader from './loaders/buildSassLoader'
import buildSvgLoader from './loaders/buildSvgLoader'
import buildFileLoader from './loaders/buildFileLoader'

export default (options: BuildOptions): RuleSetRule[] => {
  const babelLoader = {
    test: /\.m?(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const sassLoader = buildSassLoader(options)

  const svgrLoader = buildSvgLoader()

  const fileLoader = buildFileLoader()

  return [babelLoader, typescriptLoader, sassLoader, svgrLoader, fileLoader]
}
