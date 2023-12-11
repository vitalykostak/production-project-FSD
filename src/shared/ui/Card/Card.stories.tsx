import 'app/styles/index.scss'
import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import Text from '../Text/Text'

const meta = {
  title: 'shared/Card',
  component: Card,
  tags: ['autodocs']
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: <Text title='Title' text='Example text'/>
  }
}

export const PrimaryDark: Story = {
  args: {
    children: <Text title='Title' text='Example text'/>
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
