import type { Meta, StoryObj } from '@storybook/react'
import Skeleton, { type SkeletonProps } from './Skeleton'
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs']
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

const normalArgs: SkeletonProps = {
  width: '100%',
  height: '200px'
}

const circleArgs: SkeletonProps = {
  width: '200px',
  height: '200px',
  borderRadius: '50%'
}

export const Normal: Story = {
  args: normalArgs
}

export const NormalDark: Story = {
  args: normalArgs,
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Circle: Story = {
  args: circleArgs
}

export const CircleDark: Story = {
  args: circleArgs,
  decorators: [ThemeDecorator(Theme.DARK)]
}
