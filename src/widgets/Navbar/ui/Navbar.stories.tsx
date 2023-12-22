import type { Meta, StoryObj } from '@storybook/react'
import Navbar from './Navbar'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ReduxStoreDecorator from 'shared/config/storybook/ReduxStoreDecorator'
import AvatarTestImg from 'shared/assets/tests/avatar-test-img.png'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs']
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

const userAuthTestData = { id: '1', username: 'username', avatar: AvatarTestImg }

export const NotAuthorzied: Story = {
  args: {},
  decorators: [ReduxStoreDecorator({ user: { authData: undefined } })]
}

export const NotAuthorziedDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    ReduxStoreDecorator({ user: { authData: undefined } })
  ]
}

export const Authorized: Story = {
  args: {},
  decorators: [
    ReduxStoreDecorator({
      user: {
        authData: userAuthTestData
      }
    })
  ]
}

export const AuthorizedDark: Story = {
  args: {},
  decorators: [
    ReduxStoreDecorator({
      user: {
        authData: userAuthTestData
      }
    }),
    ThemeDecorator(Theme.DARK)
  ]
}
