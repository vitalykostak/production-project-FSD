import type { Meta, StoryObj } from '@storybook/react'
import ArticleDetailsPage from './ArticleDetailsPage'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ReduxStoreDecorator from 'shared/config/storybook/ReduxStoreDecorator'
import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleType } from 'entities/Articles'
import {
  type Article,
  ArticleBlockType
} from 'entities/Articles/model/types/articles'
import { type Comment } from 'entities/Comment'

const meta = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  tags: ['autodocs']
} satisfies Meta<typeof ArticleDetailsPage>

const article: Article = {
  id: '1',
  user: { id: '1', username: 'User' },
  title: 'Javascript news',
  subtitle: 'Javascript news subitle subtile',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
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
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
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
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
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

const comment: Comment = {
  id: '1',
  text: 'Example text',
  user: { id: '1', username: 'User' }
}

export default meta
type Story = StoryObj<typeof meta>

const stateLoading: DeepPartial<StateSchema> = {
  articleDetails: {
    isLoading: true
  }
}

const stateError: DeepPartial<StateSchema> = {
  articleDetails: {
    isLoading: false,
    error: 'Some error'
  }
}

const stateWithArticle: DeepPartial<StateSchema> = {
  articleDetails: {
    isLoading: false,
    data: article
  },
  articleDetailsPage: {
    comments: {
      ids: ['1', '2', '3', '4'],
      entities: {
        1: comment,
        2: { ...comment, id: '2' },
        3: { ...comment, id: '3' },
        4: { ...comment, id: '4' }
      }
    }

  }
}

const mockRecommendations = [
  {
    url: `${API_URL}/articles?_limit=3`,
    method: 'GET',
    status: 200,
    response: [{ ...article, id: '2' },
      { ...article, id: '3' },
      { ...article, id: '4' }]

  }
]

export const Loading: Story = {
  args: {},
  decorators: [ReduxStoreDecorator(stateLoading)]
}

export const LoadingDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    ReduxStoreDecorator(stateLoading)
  ]
}

export const Primary: Story = {
  args: {},
  decorators: [ReduxStoreDecorator(stateWithArticle)],
  parameters: {
    mockData: mockRecommendations
  }
}

export const PrimaryDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    ReduxStoreDecorator(stateWithArticle)
  ],
  parameters: {
    mockData: mockRecommendations
  }
}

export const Error: Story = {
  args: {},
  decorators: [ReduxStoreDecorator(stateError)]
}

export const ErrorDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    ReduxStoreDecorator(stateError)
  ]
}
