import 'app/styles/index.scss'
import type { Meta, StoryObj } from '@storybook/react'
import CommentList, { type CommentListProps } from './CommentList'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ReduxStoreDecorator from 'shared/config/storybook/ReduxStoreDecorator'
import AvatarTestImg from 'shared/assets/tests/avatar-test-img.png'

const meta = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  tags: ['autodocs']
} satisfies Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof meta>

const props: CommentListProps = {
  isLoading: false,
  comments: [
    {
      id: '1',
      text: 'Comment 1',
      user: { id: '1', username: 'User1', avatar: AvatarTestImg }
    },
    {
      id: '2',
      text: 'Comment 2',
      user: { id: '1', username: 'User2', avatar: AvatarTestImg }
    }
  ]
}

export const Primary: Story = {
  args: props,
  decorators: [ReduxStoreDecorator({})]
}

export const Loading: Story = {
  args: { ...props, isLoading: true },
  decorators: [ReduxStoreDecorator({})]
}

export const PrimaryDark: Story = {
  args: props,
  decorators: [ThemeDecorator(Theme.DARK), ReduxStoreDecorator({})]
}

export const WithoutAvatar: Story = {
  args: {
    ...props,
    comments: props.comments.map((c) => ({
      ...c,
      user: { ...c.user, avatar: undefined }
    }))
  },
  decorators: [ReduxStoreDecorator({})]
}

export const WithoutComments: Story = {
  args: {
    ...props,
    comments: []
  },
  decorators: [ReduxStoreDecorator({})]
}
