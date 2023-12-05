import type { Meta, StoryObj } from '@storybook/react'
import CurrencySelect from './CurrencySelect'
import { CURRENCY } from 'entities/Currency'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,

  tags: ['autodocs']
} satisfies Meta<typeof CurrencySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    value: CURRENCY.UAH
  }
}
export const PrimaryDark: Story = {
  args: {
    value: CURRENCY.UAH
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
