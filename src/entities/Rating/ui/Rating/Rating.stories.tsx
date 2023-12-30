import type { Meta, StoryObj } from '@storybook/react'
import Rating from './Rating'
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

const meta = {
  title: 'entities/Rating/Rating',
  component: Rating,
  tags: ['autodocs']
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    title: 'Title'
  }
}

export const Dark: Story = {
  args: {
    title: 'Title'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const WithFeedbackLight: Story = {
  args: {
    title: 'Title',
    hasFeedback: true,
    feedbackTitle: 'Feedback title'
  }
}

export const WithFeedbackDark: Story = {
  args: {
    title: 'Title',
    hasFeedback: true,
    feedbackTitle: 'Feedback title'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
