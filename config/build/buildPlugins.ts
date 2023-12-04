import HtmlWebpackPlugin from 'html-webpack-plugin'
import {
  ProgressPlugin,
  type WebpackPluginInstance,
  DefinePlugin
} from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export default (options: BuildOptions): WebpackPluginInstance[] => {
  const { paths, isDev, apiUrl } = options

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash:8].css' }),
    new DefinePlugin({
      IS_DEV: isDev,
      API_URL: JSON.stringify(apiUrl)
    })
  ]

  if (isDev) {
    // NOTE when the plugin is included in build, BundleAnalyzerPlugin runs server and npm script can't get finished
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }))
  }

  return plugins
}
