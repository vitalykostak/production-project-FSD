import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'

import LanguageSwitcher from './LanguageSwitcher'

import type { Meta, StoryObj } from '@storybook/react'

// TODO theme is not accessible in stories

const meta = {
    title: 'features/LanguageSwitcher',
    component: LanguageSwitcher,

    tags: ['autodocs'],
} satisfies Meta<typeof LanguageSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
}
