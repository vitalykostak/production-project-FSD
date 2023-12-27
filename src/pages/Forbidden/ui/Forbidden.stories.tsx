import type { Meta, StoryObj } from '@storybook/react'
import Forbidden from './Forbidden'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ReduxStoreDecorator from 'shared/config/storybook/ReduxStoreDecorator'

const meta = {
  title: 'pages/Forbidden',
  component: Forbidden,
  tags: ['autodocs']
} satisfies Meta<typeof Forbidden>

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
