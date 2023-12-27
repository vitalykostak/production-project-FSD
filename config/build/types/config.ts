import { type BuildMode } from '../consts'

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  port: number
  isDev: boolean
  apiUrl: string
  executionEnvironment: ExecutionEnvironment
}

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
  locales: string
  buildLocales: string
}

export interface Env {
  port: number
  mode: BuildMode
  apiUrl: string
}

export type ExecutionEnvironment = 'storybook' | 'app' | 'jest'
