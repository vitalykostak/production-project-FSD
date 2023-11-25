import type { Meta, StoryObj } from '@storybook/react'
import About from './About'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'pages/About',
  component: About,
  tags: ['autodocs']
} satisfies Meta<typeof About>

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
