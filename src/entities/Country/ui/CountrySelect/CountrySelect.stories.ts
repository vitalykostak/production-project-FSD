import type { Meta, StoryObj } from '@storybook/react'
import CountrySelect from './CountrySelect'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { COUNTRY } from 'entities/Country'

const meta = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  tags: ['autodocs']
} satisfies Meta<typeof CountrySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    value: COUNTRY.UKRAINE
  }
}
export const PrimaryDark: Story = {
  args: {
    value: COUNTRY.UKRAINE
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
