import type { Meta, StoryObj } from '@storybook/react'
import Navbar from './Navbar'
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import ReduxStoreDecorator from '@/shared/config/storybook/ReduxStoreDecorator'
import AvatarTestImg from '@/shared/assets/tests/avatar-test-img.png'
import { type Notification } from '@/entities/Notification/types/notification'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs']
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

const userAuthTestData = { id: '1', username: 'username', avatar: AvatarTestImg }

const notification: Notification = {
  id: '1',
  userId: '1',
  title: 'Notification',
  description: 'Event'
}

const mockNotifications = [
  {
    url: `${API_URL}/notifications`,
    method: 'GET',
    status: 200,
    response: [
      notification,
      { ...notification, id: '3' },
      { ...notification, id: '4' }
    ]
  }
]

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
  parameters: { mockData: mockNotifications },
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
  parameters: { mockData: mockNotifications },
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
