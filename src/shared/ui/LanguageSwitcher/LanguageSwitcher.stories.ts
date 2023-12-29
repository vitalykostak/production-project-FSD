import type { Meta, StoryObj } from '@storybook/react'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

// TODO theme is not accessible in stories

const meta = {
  title: 'shared/LanguageSwitcher',
  component: LanguageSwitcher,

  tags: ['autodocs']
} satisfies Meta<typeof LanguageSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
