import path from 'path'

import { type Configuration } from 'webpack'
import buildWebpackConfig from './config/build/buildWebpackConfig'
import {
  BuildMode,
  type ExecutionEnvironment,
  type BuildOptions,
  type BuildPaths,
  type Env
} from './config/build/types/config'

export default (env: Env) => {
  const mode: BuildMode = env.mode || BuildMode.DEVELOPMENT
  const isDev: boolean = mode === BuildMode.DEVELOPMENT
  const apiUrl: string = env.apiUrl
  const port: number = Number(env.port) || 3000
  const executionEnvironment: ExecutionEnvironment = 'app'

  console.log({ env })

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    build: path.resolve(__dirname, './build'),
    html: path.resolve(__dirname, './public', 'index.html'),
    src: path.resolve(__dirname, './src')
  }

  const buildOptions: BuildOptions = {
    mode,
    paths,
    isDev,
    port,
    apiUrl,
    executionEnvironment
  }

  const config: Configuration = buildWebpackConfig(buildOptions)

  return config
}
