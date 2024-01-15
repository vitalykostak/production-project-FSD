import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'

import ListBox from './ListBox'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    decorators: [
        Story => (
            <div style={{ padding: 200 }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof ListBox>

export default meta
type Story = StoryObj<typeof meta>

const args = {
    value: 'value_1',
    defaultValue: 'value_1',
    items: [
        { value: 'value_1', content: 'content_1' },
        { value: 'value_2', content: 'content_2' },
        { value: 'value_3', content: 'content_3', disabled: true },
        { value: 'value_4', content: 'content_4' },
    ],
}

export const Primary: Story = {
    args,
    decorators: [ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true })],
}

export const TopLeft: Story = {
    args: { ...args, direction: 'topLeft' },
    decorators: [ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true })],
}

export const TopRight: Story = {
    args: { ...args, direction: 'topRight' },
    decorators: [ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true })],
}

export const BottomLeft: Story = {
    args: { ...args, direction: 'bottomLeft' },
    decorators: [ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true })],
}

export const BottomRight: Story = {
    args: { ...args, direction: 'bottomRight' },
    decorators: [ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true })],
}
