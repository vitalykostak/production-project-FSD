import type { Meta, StoryObj } from '@storybook/react'
import Avatar from './Avatar'
import AvatarTestImg from 'shared/assets/tests/avatar-test-img.png'

const meta = {
  title: 'shared/Avatar',
  component: Avatar,

  tags: ['autodocs']
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    src: AvatarTestImg
  }
}
export const PrimarySize200: Story = {
  args: {
    src: AvatarTestImg,
    size: 200
  }
}

export const PrimarySize100: Story = {
  args: {
    src: AvatarTestImg,
    size: 100
  }
}
