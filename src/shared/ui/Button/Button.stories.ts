import 'app/styles/index.scss'
import type { Meta, StoryObj } from '@storybook/react'

import Button, { ButtonTheme } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'shared/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.PRIMARY
  }
}

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR
  }
}

export const Outline: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE
  }
}
