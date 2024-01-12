import { type StoryFn } from '@storybook/react'

// eslint-disable-next-line feature-sliced-plugin-custom/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'

import { type Theme } from '../../consts/theme'

interface ThemeDecoratorOptions {
    isAppRedesigned?: boolean
}

const ThemeDecorator = (theme: Theme, options?: ThemeDecoratorOptions) => {
    const { isAppRedesigned } = options || {}

    const Decorator = (Story: StoryFn) => (
        <ThemeProvider initialTheme={theme}>
            <div className={`${isAppRedesigned ? 'app_redesigned' : 'app'} ${theme}`}>
                <Story />
            </div>
        </ThemeProvider>
    )

    return Decorator
}

export default ThemeDecorator
