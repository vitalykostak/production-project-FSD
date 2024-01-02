import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'

import PageError from './PageError'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'widgets/PageError',
  component: PageError,
  tags: ['autodocs']
} satisfies Meta<typeof PageError>

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
