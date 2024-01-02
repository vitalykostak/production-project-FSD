import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'
import ReduxStoreDecorator from '@/shared/config/storybook/ReduxStoreDecorator'

import { type LoginSchema } from '../../model/types/loginSchema'

import LoginForm from './LoginForm'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'features/AuthByUsername/LoginForm',
  component: LoginForm,
  tags: ['autodocs']
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

const loginFormPrefilledState: LoginSchema = {
  username: 'username',
  password: '1234',
  isLoading: false
}

const loginFormErrorState: LoginSchema = {
  ...loginFormPrefilledState,
  error: 'error'
}

const loginFormIsLoadingState: LoginSchema = {
  ...loginFormPrefilledState,
  isLoading: true
}

export const LoginFormPrefilled: Story = {
  decorators: [
    ReduxStoreDecorator({
      loginForm: loginFormPrefilledState
    })
  ]
}

export const LoginFormPrefilledDark: Story = {
  decorators: [
    ReduxStoreDecorator({
      loginForm: loginFormPrefilledState
    }),
    ThemeDecorator(Theme.DARK)
  ]
}

export const LoginFormError: Story = {
  decorators: [
    ReduxStoreDecorator({
      loginForm: loginFormErrorState
    })
  ]
}

export const LoginFormErrorDark: Story = {
  decorators: [
    ReduxStoreDecorator({
      loginForm: loginFormErrorState
    }),
    ThemeDecorator(Theme.DARK)
  ]
}

export const LoginFormLoading: Story = {
  decorators: [
    ReduxStoreDecorator({
      loginForm: loginFormIsLoadingState
    })
  ]
}

export const LoginFormLoadingDark: Story = {
  decorators: [
    ReduxStoreDecorator({
      loginForm: loginFormIsLoadingState
    }),
    ThemeDecorator(Theme.DARK)
  ]
}
