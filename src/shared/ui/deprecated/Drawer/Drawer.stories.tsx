import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider'

import Drawer from './Drawer'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/deprecated/Drawer',
    component: Drawer,
    tags: ['autodocs'],
    decorators: [
        Story => (
            <AnimationProvider>
                <Story />
            </AnimationProvider>
        ),
    ],
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        isOpen: true,
    },
}

export const PrimaryDark: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        isOpen: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}
