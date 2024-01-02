import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'
import ReduxStoreDecorator from '@/shared/config/storybook/ReduxStoreDecorator'
import AvatarTestImg from '@/shared/assets/tests/avatar-test-img.png'

import CommentCard from './CommentCard'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  tags: ['autodocs']
} satisfies Meta<typeof CommentCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    comment: {
      id: '1',
      text: 'Comment 1',
      user: { id: '1', username: 'User1', avatar: AvatarTestImg }
    }
  },
  decorators: [ReduxStoreDecorator({})]
}

export const PrimaryDark: Story = {
  args: {
    comment: {
      id: '1',
      text: 'Comment 1',
      user: { id: '1', username: 'User1', avatar: AvatarTestImg }
    }
  },
  decorators: [ThemeDecorator(Theme.DARK), ReduxStoreDecorator({})]
}

export const Loading: Story = {
  args: {
    isLoading: true,
    comment: {
      id: '1',
      text: 'Comment 1',
      user: { id: '1', username: 'User1', avatar: AvatarTestImg }
    }
  },
  decorators: [ReduxStoreDecorator({})]
}
