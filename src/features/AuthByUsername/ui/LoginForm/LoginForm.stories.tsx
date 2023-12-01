import 'app/styles/index.scss'
import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ReduxStoreDecorator from 'shared/config/storybook/ReduxStoreDecorator'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type LoginSchema } from '../../model/types/loginSchema'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs']
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

const loginFormPrefilledState: DeepPartial<LoginSchema> = {
  username: 'username',
  password: '1234'
}

const loginFormErrorState: DeepPartial<LoginSchema> = {
  ...loginFormPrefilledState,
  error: 'error'
}

const loginFormIsLogaingState: DeepPartial<LoginSchema> = {
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
      loginForm: loginFormIsLogaingState
    })
  ]
}

export const LoginFormLoadingDark: Story = {
  decorators: [
    ReduxStoreDecorator({
      loginForm: loginFormIsLogaingState
    }),
    ThemeDecorator(Theme.DARK)
  ]
}
