import type { Meta, StoryObj } from '@storybook/react'
import ArticleDetails from './ArticleDetails'
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import {
  type Article
} from '../../model/types/articles'
import ReduxStoreDecorator from '@/shared/config/storybook/ReduxStoreDecorator'
import { ArticleBlockType, ArticleType } from '../../model/consts/consts'

const meta = {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails,
  tags: ['autodocs']
} satisfies Meta<typeof ArticleDetails>

export default meta
type Story = StoryObj<typeof meta>

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Javascript news subitle subtile',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  user: { id: '1', username: 'User' },
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Блок 1',
      paragraphs: [
        'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
      ]
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'Блок 1',
      paragraphs: [
        'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
      ]
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Latin_letter_G.svg/800px-Latin_letter_G.svg.png',
      title: 'Image 1'
    },
    {
      id: '3',
      type: ArticleBlockType.CODE,
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
    },
    {
      id: '7',
      type: ArticleBlockType.TEXT,
      title: 'Title',
      paragraphs: [
        'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
      ]
    },
    {
      id: '8',
      type: ArticleBlockType.IMAGE,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Latin_letter_G.svg/800px-Latin_letter_G.svg.png',
      title: 'Title'
    },
    {
      id: '9',
      type: ArticleBlockType.TEXT,
      title: 'Title',
      paragraphs: [
        'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
      ]
    }
  ]
}

const args = { id: '1' }

export const Primary: Story = {
  args,
  decorators: [ReduxStoreDecorator({ articleDetails: { data: article } })]
}

export const PrimaryDark: Story = {
  args,
  decorators: [
    ThemeDecorator(Theme.DARK),
    ReduxStoreDecorator({ articleDetails: { data: article } })
  ]
}

export const Loading: Story = {
  args,
  decorators: [ReduxStoreDecorator({ articleDetails: { data: undefined, isLoading: true } })]
}

export const LoadingDark: Story = {
  args,
  decorators: [
    ThemeDecorator(Theme.DARK),
    ReduxStoreDecorator({ articleDetails: { data: undefined, isLoading: true } })
  ]
}

export const Error: Story = {
  args,
  decorators: [ReduxStoreDecorator({ articleDetails: { data: undefined, isLoading: false, error: 'error' } })]
}

export const ErrorDark: Story = {
  args,
  decorators: [
    ThemeDecorator(Theme.DARK),
    ReduxStoreDecorator({ articleDetails: { data: undefined, isLoading: false, error: 'error' } })
  ]
}
