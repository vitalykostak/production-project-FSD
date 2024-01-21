import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'
import FeatureFlagsDecorator from '@/shared/config/storybook/FeatureFlagsDecorator'

import Popover from './Popover'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/Popups/Popover',
    component: Popover,
    tags: ['autodocs'],
    decorators: [
        Story => (
            <div style={{ padding: 200 }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        trigger: 'Trigger',
        children: 'Children',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true }),
    ],
}

export const BottomLeft: Story = {
    args: {
        trigger: 'Trigger',
        children: 'Children',
        direction: 'bottomLeft',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true }),
    ],
}

export const BottomRight: Story = {
    args: {
        trigger: 'Trigger',
        children: 'Children',
        direction: 'bottomRight',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true }),
    ],
}

export const TopLeft: Story = {
    args: {
        trigger: 'Trigger',
        children: 'Children',
        direction: 'topLeft',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true }),
    ],
}

export const TopRight: Story = {
    args: {
        trigger: 'Trigger',
        children: 'Children',
        direction: 'topRight',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true }),
    ],
}
