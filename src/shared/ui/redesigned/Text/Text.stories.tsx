import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import FeatureFlagsDecorator from '@/shared/config/storybook/FeatureFlagsDecorator'
import { Theme } from '@/shared/consts/theme'

import Text from './Text'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const TitleAndText: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true }),
    ],
}

export const TitleAndTextError: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
        variant: 'error',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true }),
    ],
}

export const TitleAndTextAccent: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
        variant: 'accent',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true }),
    ],
}

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true }),
    ],
}

export const OnlyText: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true }),
    ],
}

export const TitleAndTextDark: Story = {
    args: {
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.DARK, { isAppRedesigned: true }),
    ],
}

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.DARK, { isAppRedesigned: true }),
    ],
}

export const OnlyTextDark: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.DARK, { isAppRedesigned: true }),
    ],
}

export const TitleAndTextSizeL: Story = {
    args: {
        size: 'l',
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true }),
    ],
}

export const TitleAndTextSizeLDark: Story = {
    args: {
        size: 'l',
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.DARK, { isAppRedesigned: true }),
    ],
}

export const TitleAndTextSizeM: Story = {
    args: {
        size: 'm',
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true }),
    ],
}

export const TitleAndTextSizeMDark: Story = {
    args: {
        size: 'm',
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.DARK, { isAppRedesigned: true }),
    ],
}

export const TitleAndTextSizeS: Story = {
    args: {
        size: 's',
        title: 'Title',
        text: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
    },
    decorators: [
        FeatureFlagsDecorator({ isAppRedesigned: true }),
        ThemeDecorator(Theme.LIGHT, { isAppRedesigned: true }),
    ],
}
