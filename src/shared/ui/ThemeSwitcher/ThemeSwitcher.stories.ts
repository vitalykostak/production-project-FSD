import type { Meta, StoryObj } from '@storybook/react'
import ThemeSwitcher from './ThemeSwitcher'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

// TODO Theme is not accessible in stories

const meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,

  tags: ['autodocs']
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}
