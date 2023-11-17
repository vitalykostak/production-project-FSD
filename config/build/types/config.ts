export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
  isDev: boolean;
}

export enum BuildMode {
  PRODUCTION = "production",
  DEVELOPMENT = "development",
}

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface Env {
  port: number;
  mode: BuildMode;
}
