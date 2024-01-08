import path from 'path'

import { type RuleSetRule, type Configuration, DefinePlugin } from 'webpack'

import {
    type ExecutionEnvironment,
    type BuildOptions,
    type BuildPaths,
} from '../build/types/config'
import buildSvgLoader from '../build/loaders/buildSvgLoader'
import buildSassLoader from '../build/loaders/buildSassLoader'
import buildFileLoader from '../build/loaders/buildFileLoader'
import { BuildMode } from '..//build/consts'

export const buildStorybookWebpackConfig = async (config: Configuration) => {
    const mode: BuildMode = BuildMode.DEVELOPMENT

    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    }

    const isDev: boolean = mode === BuildMode.DEVELOPMENT
    const port: number = 3000
    const apiUrl: string = 'https://localhost:3001'
    const executionEnvironment: ExecutionEnvironment = 'storybook'

    const buildOptions: BuildOptions = {
        mode,
        paths,
        isDev,
        port,
        apiUrl,
        executionEnvironment,
    }

    // remove svg from existing rule
    if (config.module?.rules) {
        config.module.rules = config.module.rules.map(rule => {
            if (
                /svg/.test((rule as RuleSetRule)?.test as string) ||
                /png/.test((rule as RuleSetRule)?.test as string)
            ) {
                return {
                    ...(rule as RuleSetRule),
                    // without svg and png

                    test: /\.(ico|jpg|jpeg|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
                }
            }

            return rule
        })
    }

    // add custom
    config.resolve?.extensions?.push('.ts', '.tsx')
    if (config.resolve?.alias) {
        config.resolve.alias = { ...config.resolve.alias, '@': buildOptions.paths.src }
    }
    config.resolve?.modules?.push(buildOptions.paths.src, 'node_modules')
    config.module?.rules?.push(buildSvgLoader(), buildSassLoader(buildOptions), buildFileLoader())

    config.plugins?.push(
        new DefinePlugin({
            IS_DEV: buildOptions.isDev,
            API_URL: JSON.stringify(buildOptions.apiUrl),
            EXECUTION_ENVIRONMENT: JSON.stringify(buildOptions.executionEnvironment),
        }),
    )

    return config
}
