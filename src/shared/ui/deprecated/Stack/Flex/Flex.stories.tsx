import Flex from './Flex'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/deprecated/Stack/Flex',
    component: Flex,
    tags: ['autodocs'],
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>

const children = (
    <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>fifth</div>
    </>
)

export const Row: Story = {
    args: {
        direction: 'row',
        children,
    },
}
export const Column: Story = {
    args: {
        direction: 'column',
        children,
    },
}

export const JustStart: Story = {
    args: {
        direction: 'row',
        justify: 'start',
        children,
    },
}

export const JustEnd: Story = {
    args: {
        direction: 'row',
        justify: 'end',
        children,
    },
}

export const JustifyCenter: Story = {
    args: {
        direction: 'row',
        children,
        justify: 'center',
    },
}

export const JustBetween: Story = {
    args: {
        direction: 'row',
        justify: 'between',
        children,
    },
}

export const Gap4: Story = {
    args: {
        direction: 'row',
        gap: '4',
        children,
    },
}

export const Gap8: Story = {
    args: {
        direction: 'row',
        gap: '8',
        children,
    },
}

export const Gap12: Story = {
    args: {
        direction: 'row',
        children,
        gap: '12',
    },
}

export const Gap16: Story = {
    args: {
        direction: 'row',
        gap: '16',
        children,
    },
}

export const ColumnGap4: Story = {
    args: {
        direction: 'column',
        gap: '4',
        children,
    },
}

export const ColumnGap8: Story = {
    args: {
        direction: 'column',
        gap: '8',
        children,
    },
}

export const ColumnGap12: Story = {
    args: {
        direction: 'column',
        children,
        gap: '12',
    },
}

export const ColumnGap16: Story = {
    args: {
        direction: 'column',
        gap: '16',
        children,
    },
}
