import 'app/styles/index.scss'
import type { Meta, StoryObj } from '@storybook/react'

import Button, { ButtonSize, ButtonTheme } from './Button'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

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

export const PrimaryDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.PRIMARY
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR
  }
}

export const ClearDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Background: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND
  }
}

export const BackgroundDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const BackgroundInverted: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const BackgroundInvertedDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OutlineM: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M
  }
}

export const OutlineL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  }
}

export const OutlineXL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
  }
}

export const SquareM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.M,
    square: true
  }
}

export const SquareL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    square: true
  }
}

export const SquareXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    square: true
  }
}
