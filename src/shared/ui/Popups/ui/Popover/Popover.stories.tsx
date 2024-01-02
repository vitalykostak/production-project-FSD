import Popover from './Popover'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/Popups/Popover',
  component: Popover,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: 200 }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    trigger: 'Trigger',
    children: 'Children'
  }
}

export const BottomLeft: Story = {
  args: {
    trigger: 'Trigger',
    children: 'Children',
    direction: 'bottomLeft'
  }
}

export const BottomRight: Story = {
  args: {
    trigger: 'Trigger',
    children: 'Children',
    direction: 'bottomRight'
  }
}

export const TopLeft: Story = {
  args: {
    trigger: 'Trigger',
    children: 'Children',
    direction: 'topLeft'
  }
}

export const TopRight: Story = {
  args: {
    trigger: 'Trigger',
    children: 'Children',
    direction: 'topRight'
  }
}
