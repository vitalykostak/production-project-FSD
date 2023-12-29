import { type StoryFn } from '@storybook/react'
import { ThemeProvider, type Theme } from '@/app/providers/ThemeProvider'

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
