import 'app/styles/index.scss'
import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs']
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const LoginFormLight: Story = {}

export const LoginFormDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
