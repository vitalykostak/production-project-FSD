import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'
import buildSassLoader from './loaders/buildSassLoader'
import buildSvgLoader from './loaders/buildSvgLoader'
import buildFileLoader from './loaders/buildFileLoader'
import buildBabelLoader from './loaders/buildBabelLoader'

export default (options: BuildOptions): RuleSetRule[] => {
  const babelLoader = buildBabelLoader(options)

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
