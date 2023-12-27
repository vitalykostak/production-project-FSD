import type { Meta, StoryObj } from '@storybook/react'
import CurrencySelect from './CurrencySelect'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { CURRENCY } from '../../model/consts/currency'

const meta = {
  title: 'entities/Currency/CurrencySelect',
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
