import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'

import Input from './Input'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputWithValue: Story = {
    args: {
        value: 'Input',
    },
    decorators: [ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true })],
}

export const InputWithValueDark: Story = {
    args: {
        value: 'Input',
    },
    decorators: [ThemeDecorator(Theme.DARK, { isAppRedesigned: true })],
}

export const InputWithPlaceholderValue: Story = {
    args: {
        value: 'password',
        placeholder: 'type Password',
    },
    decorators: [ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true })],
}

export const InputWithValuePlaceholderDark: Story = {
    args: {
        value: 'password',
        placeholder: 'type Password',
    },
    decorators: [ThemeDecorator(Theme.DARK, { isAppRedesigned: true })],
}
