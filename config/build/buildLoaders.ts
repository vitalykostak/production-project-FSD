import { type RuleSetRule } from 'webpack'

import { type BuildOptions } from './types/config'
import buildSassLoader from './loaders/buildSassLoader'
import buildSvgLoader from './loaders/buildSvgLoader'
import buildFileLoader from './loaders/buildFileLoader'
import buildBabelLoader from './loaders/buildBabelLoader'

export default (options: BuildOptions): RuleSetRule[] => {
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })
  const typescriptBabelLoader = buildBabelLoader({ ...options, isTsx: true })

  const sassLoader = buildSassLoader(options)

  const svgrLoader = buildSvgLoader()

  const fileLoader = buildFileLoader()

  return [codeBabelLoader, typescriptBabelLoader, sassLoader, svgrLoader, fileLoader]
}
