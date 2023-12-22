import type { Meta, StoryObj } from '@storybook/react'
import Dropdown from './Dropdown'
import Button, { ButtonTheme } from '../Button/Button'

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  tags: ['autodocs']
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    trigger: <Button theme={ButtonTheme.OUTLINE}>Dropdown</Button>,
    items: [
      { content: 'Content 1', disabled: false },
      { content: 'Content 2', disabled: false },
      { content: 'Content 3', disabled: true },
      { content: 'Content 4', disabled: false }
    ]
  }
}
