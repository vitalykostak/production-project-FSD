import { type StoryFn } from '@storybook/react'
// eslint-disable-next-line feature-sliced-plugin-custom/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { type Theme } from '../../consts/theme'

const ThemeDecorator = (theme: Theme) => {
  const Decorator = (Story: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )

  return Decorator
}

export default ThemeDecorator
