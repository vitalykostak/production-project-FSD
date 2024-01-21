import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import FeatureFlagsDecorator from '@/shared/config/storybook/FeatureFlagsDecorator'
import { Theme } from '@/shared/consts/theme'

import Text from '../Text/Text'

import Card from './Card'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/Card',
    component: Card,
    tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: <Text title="Title" text="Example text" />,
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true }),
    ],
}

export const PrimaryDark: Story = {
    args: {
        children: <Text title="Title" text="Example text" />,
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.DARK, { isAppRedesigned: true }),
    ],
}
export const PrimaryOutline: Story = {
    args: {
        children: <Text title="Title" text="Example text" />,
        variant: 'outline',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true }),
    ],
}

export const PrimaryOutlineDark: Story = {
    args: {
        children: <Text title="Title" text="Example text" />,
        variant: 'outline',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.DARK, { isAppRedesigned: true }),
    ],
}
