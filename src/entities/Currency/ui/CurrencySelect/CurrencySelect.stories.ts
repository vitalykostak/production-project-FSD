import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'

import { CURRENCY } from '../../model/consts/currency'

import CurrencySelect from './CurrencySelect'

import type { Meta, StoryObj } from '@storybook/react'

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
