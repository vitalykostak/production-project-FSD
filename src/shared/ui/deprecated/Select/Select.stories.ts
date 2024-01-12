import Select from './Select'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/deprecated/Select',
    component: Select,

    tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        label: 'Test Label',
        value: '123',
        options: [
            { value: '123', content: 'First Item' },
            { value: '1234', content: 'Second Item' },
        ],
    },
}
