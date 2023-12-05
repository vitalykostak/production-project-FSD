import path from 'path'
import {
  BuildMode,
  type BuildOptions,
  type BuildPaths
} from '../build/types/config'
import { type RuleSetRule, type Configuration, DefinePlugin } from 'webpack'
import buildSvgLoader from '../build/loaders/buildSvgLoader'
import buildSassLoader from '../build/loaders/buildSassLoader'
import buildFileLoader from '../build/loaders/buildFileLoader'

export const buildStorybookWebpackConfig = async (config: Configuration) => {
  const mode: BuildMode = BuildMode.DEVELOPMENT

  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  const isDev: boolean = mode === BuildMode.DEVELOPMENT
  const port: number = 3000
  const apiUrl: string = ''

  const buildOptions: BuildOptions = {
    mode,
    paths,
    isDev,
    port,
    apiUrl
  }

  // remove svg from existing rule
  if (config.module?.rules) {
    config.module.rules = config.module.rules.map((rule) => {
      if (/svg/.test((rule as RuleSetRule)?.test as string) || /png/.test((rule as RuleSetRule)?.test as string)) {
        return {
          ...(rule as RuleSetRule),
          // without svg and png

          test: /\.(ico|jpg|jpeg|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
        }
      }

      return rule
    })
  }

  // add custom
  config.resolve?.extensions?.push('.ts', '.tsx')
  config.resolve?.modules?.push(buildOptions.paths.src, 'node_modules')
  config.module?.rules?.push(
    buildSvgLoader(),
    buildSassLoader(buildOptions),
    buildFileLoader()
  )

  config.plugins?.push(
    new DefinePlugin({
      IS_DEV: buildOptions.isDev,
      API_URL: JSON.stringify(buildOptions.apiUrl)
    })
  )

  return config
}
