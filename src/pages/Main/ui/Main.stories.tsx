import type { Meta, StoryObj } from '@storybook/react'
import Main from './Main'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'pages/Main',
  component: Main,
  tags: ['autodocs']
} satisfies Meta<typeof Main>

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