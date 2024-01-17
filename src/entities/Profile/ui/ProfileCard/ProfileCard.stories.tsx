import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'
import AvatarTestImg from '@/shared/assets/tests/avatar-test-img.png'
import { CURRENCY } from '@/entities/Currency/testing'
import { COUNTRY } from '@/entities/Country/testing'

import { type Profile } from '../../model/types/profile'

import ProfileCardRedesigned from './ProfileCard'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCardRedesigned,
    tags: ['autodocs'],
} satisfies Meta<typeof ProfileCardRedesigned>

export default meta
type Story = StoryObj<typeof meta>

const profile: Profile = {
    username: 'Username',
    age: 30,
    avatar: AvatarTestImg,
    lastName: 'Last name',
    first: 'Firs name',
    currency: CURRENCY.EUR,
    country: COUNTRY.USA,
    city: 'Night City',
}

export const Primary: Story = {
    args: {
        data: profile,
    },
}

export const Dark: Story = {
    args: {
        data: profile,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const Error: Story = {
    args: {
        error: 'string',
    },
}

export const ErrorDark: Story = {
    args: {
        error: 'string',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const Loading: Story = {
    args: {
        isLoading: true,
    },
}

export const LoadingDark: Story = {
    args: {
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}
