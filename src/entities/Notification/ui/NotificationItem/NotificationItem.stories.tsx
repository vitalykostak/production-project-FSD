import type { Meta, StoryObj } from '@storybook/react'
import NotificationItem from './NotificationItem'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ReduxStoreDecorator from 'shared/config/storybook/ReduxStoreDecorator'
import { type Notification } from '../../types/notification'

const meta = {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  tags: ['autodocs']
} satisfies Meta<typeof NotificationItem>

export default meta
type Story = StoryObj<typeof meta>

const notification: Notification = {
  id: '1',
  userId: '1',
  title: 'Notification',
  description: 'Event'
}
const notificationWithLink: Notification = { ...notification, href: '#' }

export const Light: Story = {
  args: { item: notification },
  decorators: [ThemeDecorator(Theme.LIGHT), ReduxStoreDecorator({})]
}

export const Dark: Story = {
  args: { item: notification },
  decorators: [ThemeDecorator(Theme.DARK), ReduxStoreDecorator({})]
}

export const WithHrefLight: Story = {
  args: { item: notificationWithLink },
  decorators: [ThemeDecorator(Theme.LIGHT), ReduxStoreDecorator({})]
}

export const WithHrefDark: Story = {
  args: { item: notificationWithLink },
  decorators: [ThemeDecorator(Theme.DARK), ReduxStoreDecorator({})]
}
