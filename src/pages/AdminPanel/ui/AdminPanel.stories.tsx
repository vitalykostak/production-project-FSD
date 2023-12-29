import type { Meta, StoryObj } from '@storybook/react'
import AdminPanel from './AdminPanel'
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import ReduxStoreDecorator from '@/shared/config/storybook/ReduxStoreDecorator'

const meta = {
  title: 'pages/AdminPanel',
  component: AdminPanel,
  tags: ['autodocs']
} satisfies Meta<typeof AdminPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
  decorators: [ReduxStoreDecorator({})]
}

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK), ReduxStoreDecorator({})]
}
