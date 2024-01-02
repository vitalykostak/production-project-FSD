import { type Configuration } from 'webpack'

import buildPlugins from './buildPlugins'
import buildLoaders from './buildLoaders'
import buildResolvers from './buildResolvers'
import { type BuildOptions } from './types/config'
import buildDevServer from './buildDevServer'

export default (options: BuildOptions): Configuration => {
  const { isDev } = options

  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      path: options.paths.build,
      filename: '[name].[contenthash].js',
      clean: true,
      publicPath: '/'
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
