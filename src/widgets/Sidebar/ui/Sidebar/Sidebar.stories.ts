import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'
import { type StateSchema } from '@/app/providers/StoreProvider'
import ReduxStoreDecorator from '@/shared/config/storybook/ReduxStoreDecorator'

import Sidebar from './Sidebar'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const authState: DeepPartial<StateSchema> = {
    user: {
        authData: {},
    },
}

const notAuthState: DeepPartial<StateSchema> = {}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LightWithAuth: Story = {
    args: {},
    decorators: [ReduxStoreDecorator(authState)],
}

export const DarkWithAuth: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), ReduxStoreDecorator(authState)],
}

export const LightWithNoAuth: Story = {
    args: {},
    decorators: [ReduxStoreDecorator(notAuthState)],
}

export const DarkWithNoAuth: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), ReduxStoreDecorator(notAuthState)],
}
