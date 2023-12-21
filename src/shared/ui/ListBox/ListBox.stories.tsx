import type { Meta, StoryObj } from '@storybook/react'
import ListBox from './ListBox'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  tags: ['autodocs']
} satisfies Meta<typeof ListBox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    value: 'value_1',
    defaultValue: 'value_1',
    items: [
      { value: 'value_1', content: 'content_1' },
      { value: 'value_2', content: 'content_2' },
      { value: 'value_3', content: 'content_3', disabled: true },
      { value: 'value_4', content: 'content_4' }
    ]
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Label: Story = {
  args: {
    label: 'Label',
    value: 'value_1',
    defaultValue: 'value_1',
    items: [
      { value: 'value_1', content: 'content_1' },
      { value: 'value_2', content: 'content_2' },
      { value: 'value_3', content: 'content_3', disabled: true },
      { value: 'value_4', content: 'content_4' }
    ]
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
}
