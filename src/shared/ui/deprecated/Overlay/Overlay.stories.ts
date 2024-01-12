import Overlay from './Overlay'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/deprecated/Overlay',
    component: Overlay,
    tags: ['autodocs'],
} satisfies Meta<typeof Overlay>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
