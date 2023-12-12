import 'app/styles/index.scss'
import type { Meta, StoryObj } from '@storybook/react'
import AddCommentForm from './AddCommentForm'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ReduxStoreDecorator from 'shared/config/storybook/ReduxStoreDecorator'

const meta = {
  title: 'features/AddCommentForm/AddCommentForm',
  component: AddCommentForm,
  tags: ['autodocs']
} satisfies Meta<typeof AddCommentForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSendComment: () => 'call_action'
  },
  decorators: [ReduxStoreDecorator({})]
}

export const PrimaryDark: Story = {
  args: {
    onSendComment: () => 'call_action'
  },
  decorators: [ThemeDecorator(Theme.DARK), ReduxStoreDecorator({})]
}
