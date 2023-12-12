import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleBlockType, type Article, ArticleType } from '../types/articles'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsLoading } from './articleDetails'

describe('get articlesDetails fields', () => {
  test('Should return value "data"', () => {
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

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: article
      }
    }

    expect(getArticleDetailsData(state as StateSchema)).toEqual(article)
  })

  test('Should return value "isLoading"', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    }

    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(true)
  })

  test('Should return value "error"', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error'
      }
    }

    expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
  })

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(undefined)
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
  })
})
