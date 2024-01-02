import type { Meta, StoryObj } from '@storybook/react'
import EllipsisLoader from './EllipsisLoader'
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'

const meta = {
  title: 'shared/EllipsisLoader',
  component: EllipsisLoader,

  tags: ['autodocs']
} satisfies Meta<typeof EllipsisLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
}
