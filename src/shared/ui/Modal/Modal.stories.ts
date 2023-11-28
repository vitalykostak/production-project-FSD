import 'app/styles/index.scss'
import type { Meta, StoryObj } from '@storybook/react'
import Modal from './Modal'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs']
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    isOpen: true
  }
}

export const PrimaryDark: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    isOpen: true
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
