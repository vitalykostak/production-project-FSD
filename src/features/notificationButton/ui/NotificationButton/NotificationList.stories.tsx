import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'
import ReduxStoreDecorator from '@/shared/config/storybook/ReduxStoreDecorator'
import { type Notification } from '@/entities/Notification/testing'

import NotificationButton from './NotificationButton'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'features/notificationButton/NotificationButton',
  component: NotificationButton,
  tags: ['autodocs']
} satisfies Meta<typeof NotificationButton>

export default meta
type Story = StoryObj<typeof meta>

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

export const Light: Story = {
  parameters: { mockData: mockNotifications },
  decorators: [ThemeDecorator(Theme.LIGHT), ReduxStoreDecorator({})]
}

export const Dark: Story = {
  parameters: { mockData: mockNotifications },
  decorators: [ThemeDecorator(Theme.DARK), ReduxStoreDecorator({})]
}
