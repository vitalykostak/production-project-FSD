import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'
import ReduxStoreDecorator from '@/shared/config/storybook/ReduxStoreDecorator'

import { type Notification } from '../../types/notification'

import NotificationList from './NotificationList'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  tags: ['autodocs']
} satisfies Meta<typeof NotificationList>

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

export const ListLight: Story = {
  parameters: { mockData: mockNotifications },
  decorators: [ThemeDecorator(Theme.LIGHT), ReduxStoreDecorator({})]
}

export const ListDark: Story = {
  parameters: { mockData: mockNotifications },
  decorators: [ThemeDecorator(Theme.DARK), ReduxStoreDecorator({})]
}
