import Button, { ButtonTheme } from '../../../Button/Button'

import Dropdown from './Dropdown'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/deprecated/Popups/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
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
            { content: 'Content 4', disabled: false },
        ],
    },
}
