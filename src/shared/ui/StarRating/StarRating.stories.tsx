import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'

import StarRating from './StarRating'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/StarRating',
  component: StarRating,
  tags: ['autodocs']
} satisfies Meta<typeof StarRating>

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

export const Size20: Story = {
  args: {
    size: 20
  }

}

export const Size50: Story = {
  args: {
    size: 50
  }

}

export const LightSelected: Story = {
  args: {
    selected: 4
  }
}

export const DarkSelected: Story = {
  args: {
    selected: 3
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
