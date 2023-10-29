import path from "path";
import { Configuration } from "webpack";
import buildPlugins from "./buildPlugins";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import { BuildOptions } from "./types/config";
import buildDevServer from "./buildDevServer";

export default (options: BuildOptions): Configuration => {
  const { isDev, mode, paths } = options;

  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      path: options.paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
