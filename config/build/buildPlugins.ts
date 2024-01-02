import HtmlWebpackPlugin from 'html-webpack-plugin'
import {
  ProgressPlugin,
  type WebpackPluginInstance,
  DefinePlugin
} from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

import { type BuildOptions } from './types/config'

export default (options: BuildOptions): WebpackPluginInstance[] => {
  const { paths, isDev, apiUrl, executionEnvironment } = options

  const isProd = !isDev

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new ProgressPlugin(),
    new DefinePlugin({
      IS_DEV: isDev,
      API_URL: JSON.stringify(apiUrl),
      EXECUTION_ENVIRONMENT: JSON.stringify(executionEnvironment)
    }),
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /node_modules/,

      // add errors to webpack instead of warnings
      failOnError: true
    }),
    new ForkTsCheckerWebpackPlugin()
  ]

  if (isDev) {
    // NOTE when the plugin is included in build, BundleAnalyzerPlugin runs server and npm script can't get finished
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }))

    plugins.push(new ReactRefreshWebpackPlugin())
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[name].[contenthash:8].css'
      })
    )
    plugins.push(
      new CopyPlugin({
        patterns: [{ from: paths.locales, to: paths.buildLocales }]
      })
    )
  }

  return plugins
}
