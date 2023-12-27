import type { Meta, StoryObj } from '@storybook/react'
import ToggleItemsView from './ToggleItemsView'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ArticleListView } from '../../model/consts/consts'

const meta = {
  title: 'entities/Article/ToggleItemsView',
  component: ToggleItemsView,
  tags: ['autodocs']
} satisfies Meta<typeof ToggleItemsView>

export default meta
type Story = StoryObj<typeof meta>

export const List: Story = {
  args: {
    view: ArticleListView.SMALL
  }
}

export const ListDark: Story = {
  args: {
    view: ArticleListView.SMALL
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Tile: Story = {
  args: {
    view: ArticleListView.BIG
  }
}

export const TileDark: Story = {
  args: {
    view: ArticleListView.BIG
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
