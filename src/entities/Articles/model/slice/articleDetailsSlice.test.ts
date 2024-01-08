import { type ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { type Article } from '../types/articles'
import { ArticleBlockType, ArticleType } from '../consts/consts'

import { articleDetailsReducer } from './articleDetailsSlice'

describe('articleDetailsSlice', () => {
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
                    'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
                ],
            },
            {
                id: '4',
                type: ArticleBlockType.CODE,
                code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
            },
            {
                id: '5',
                type: ArticleBlockType.TEXT,
                title: 'Блок 1',
                paragraphs: [
                    'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
                ],
            },
            {
                id: '2',
                type: ArticleBlockType.IMAGE,
                src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                title: 'Image 1',
            },
            {
                id: '3',
                type: ArticleBlockType.CODE,
                code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
            },
            {
                id: '7',
                type: ArticleBlockType.TEXT,
                title: 'Title',
                paragraphs: [
                    'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
                ],
            },
            {
                id: '8',
                type: ArticleBlockType.IMAGE,
                src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                title: 'Title',
            },
            {
                id: '9',
                type: ArticleBlockType.TEXT,
                title: 'Title',
                paragraphs: [
                    'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
                ],
            },
        ],
    }

    test('fetchArticleById.pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            data: article,
            error: 'error',
        }

        const expected: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data: undefined,
            error: undefined,
        }

        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending)).toEqual(expected)
    })

    test('fetchArticleById.fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data: undefined,
            error: undefined,
        }

        const expected: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            data: article,
            error: undefined,
        }

        expect(
            articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.fulfilled(article, '', '')),
        ).toEqual(expected)
    })

    test('fetchArticleById.rejected', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data: article,
            error: undefined,
        }

        const expectedError = 'error'

        const expected: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            data: undefined,
            error: expectedError,
        }

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.rejected(new Error(), '', '', expectedError),
            ),
        ).toEqual(expected)
    })
})
