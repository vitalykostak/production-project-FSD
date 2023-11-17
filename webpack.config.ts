import path from "path";

import { Configuration } from "webpack";
import buildWebpackConfig from "./config/build/buildWebpackConfig";
import {
  BuildMode,
  BuildOptions,
  BuildPaths,
  Env,
} from "./config/build/types/config";

export default (env: Env) => {
  const mode: BuildMode = env.mode || BuildMode.DEVELOPMENT;

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "./src/index.tsx"),
    build: path.resolve(__dirname, "./build"),
    html: path.resolve(__dirname, "./public", "index.html"),
    src: path.resolve(__dirname, "./src"),
  };

  const isDev: boolean = mode === BuildMode.DEVELOPMENT;
  console.log({ env });
  const port: number = Number(env.port) || 3000;

  const buildOptions: BuildOptions = {
    mode,
    paths,
    isDev,
    port,
  };

  const config: Configuration = buildWebpackConfig(buildOptions);

  return config;
};
