import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'

import ThemeSwitcher from './ThemeSwitcher'

import type { Meta, StoryObj } from '@storybook/react'

// TODO Theme is not accessible in stories

const meta = {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,

    tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
}
