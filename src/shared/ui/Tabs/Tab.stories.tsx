import type { Meta, StoryObj } from '@storybook/react'
import Tabs, { type TabItem } from './Tabs'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  tags: ['autodocs']
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const tabs: TabItem[] = [
  { value: 'tab_1', content: 'Tab 1' },
  { value: 'tab_2', content: 'Tab 2' },
  { value: 'tab_3', content: 'Tab 3' },
  { value: 'tab_4', content: 'Tab 4' }
]

export const Primary: Story = {
  args: { tabs, value: 'tab_2' }
}

export const PrimaryDark: Story = {
  args: { tabs, value: 'tab_2' },
  decorators: [ThemeDecorator(Theme.DARK)]
}
