import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchArticleById } from './fetchArticleById'
import { type Article, ArticleBlockType, ArticleType } from '../../types/articles'

describe('fetchArticleById', () => {
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

  test('fetchArticleById success', async () => {
    const thunkProp = '1'

    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: article }))
    const result = await thunk.callThunk(thunkProp)

    expect(thunk.api.get).toHaveBeenCalledTimes(1)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(article)
  })

  test('fetchArticleById error', async () => {
    const thunkProp = '1'
    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 404 }))
    const result = await thunk.callThunk(thunkProp)

    expect(thunk.api.get).toHaveBeenCalledTimes(1)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('error')
  })
})
