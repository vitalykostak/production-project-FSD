import 'app/styles/index.scss'
import type { Meta, StoryObj } from '@storybook/react'
import CommentCard from './CommentCard'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ReduxStoreDecorator from 'shared/config/storybook/ReduxStoreDecorator'
import AvatarTestImg from 'shared/assets/tests/avatar-test-img.png'

const meta = {
  title: 'entities/CommentCard',
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
