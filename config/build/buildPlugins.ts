import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default (options: BuildOptions): WebpackPluginInstance[] => {
  const { paths, isDev } = options;

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash:8].css" }),
    new DefinePlugin({
      __IS_DEV__: isDev,
    }),
  ];
}
