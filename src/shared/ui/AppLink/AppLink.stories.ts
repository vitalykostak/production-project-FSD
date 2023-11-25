import type { Meta, StoryObj } from '@storybook/react'
import AppLink, { AppLinkTheme } from './AppLink'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  args: { to: '/', children: 'AppLink' },
  tags: ['autodocs']
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  }
}
export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY
  }

}
export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Red: Story = {
  args: {
    theme: AppLinkTheme.RED
  }

}
export const RedDark: Story = {
  args: {
    theme: AppLinkTheme.RED
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
