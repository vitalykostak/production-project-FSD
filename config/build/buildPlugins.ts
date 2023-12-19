import HtmlWebpackPlugin from 'html-webpack-plugin'
import {
  ProgressPlugin,
  type WebpackPluginInstance,
  DefinePlugin
} from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

export default (options: BuildOptions): WebpackPluginInstance[] => {
  const { paths, isDev, apiUrl, executionEnvironment } = options

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash:8].css' }),
    new DefinePlugin({
      IS_DEV: isDev,
      API_URL: JSON.stringify(apiUrl),
      EXECUTION_ENVIRONMENT: JSON.stringify(executionEnvironment)
    }),
    new CopyPlugin({
      patterns: [
        { from: paths.locales, to: paths.buildLocales }
      ]
    })
  ]

  if (isDev) {
    // NOTE when the plugin is included in build, BundleAnalyzerPlugin runs server and npm script can't get finished
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }))

    plugins.push(new ReactRefreshWebpackPlugin())
  }

  return plugins
}
