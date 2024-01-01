// import { articlesPageReducer } from './articlesPageSlice'
// import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList'
// import { type ArticlesPageSchema } from '../../types/articlesPageSchema'
// import {
//   type Article
// } from '@/entities/Articles/model/types/articles'
// import { ArticleType } from '@/entities/Articles'
// import { ArticleBlockType } from '@/entities/Articles/model/consts/consts'

// describe('articlesPageSlice', () => {
//   test('fetchArticlesList.pending without replace,should not effect entities', () => {
//     const article: Article = {
//       id: '1',
//       user: { id: '1', username: 'User' },
//       title: 'Javascript news',
//       subtitle: 'Javascript news subitle subtile',
//       img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
//       views: 1022,
//       createdAt: '26.02.2022',
//       type: [ArticleType.IT],
//       blocks: [
//         {
//           id: '1',
//           type: ArticleBlockType.TEXT,
//           title: 'Блок 1',
//           paragraphs: [
//             'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
//           ]
//         },
//         {
//           id: '4',
//           type: ArticleBlockType.CODE,
//           code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
//         },
//         {
//           id: '5',
//           type: ArticleBlockType.TEXT,
//           title: 'Блок 1',
//           paragraphs: [
//             'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
//           ]
//         },
//         {
//           id: '2',
//           type: ArticleBlockType.IMAGE,
//           src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
//           title: 'Image 1'
//         },
//         {
//           id: '3',
//           type: ArticleBlockType.CODE,
//           code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
//         },
//         {
//           id: '7',
//           type: ArticleBlockType.TEXT,
//           title: 'Title',
//           paragraphs: [
//             'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
//           ]
//         },
//         {
//           id: '8',
//           type: ArticleBlockType.IMAGE,
//           src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
//           title: 'Title'
//         },
//         {
//           id: '9',
//           type: ArticleBlockType.TEXT,
//           title: 'Title',
//           paragraphs: [
//             'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
//           ]
//         }
//       ]
//     }

//     const state: DeepPartial<ArticlesPageSchema> = {
//       isLoading: false,
//       error: 'error',
//       ids: ['1'],
//       entities: { 1: article }
//     }

//     const expected: DeepPartial<ArticlesPageSchema> = {
//       isLoading: true,
//       error: undefined,
//       ids: ['1'],
//       entities: { 1: article }
//     }

//     expect(
//       articlesPageReducer(
//         state as ArticlesPageSchema,
//         fetchArticlesList.pending('', { replace: false })
//       )
//     ).toEqual(expected)
//   })

//   test('fetchArticlesList.pending with replace, should return empty entities', () => {
//     const article: Article = {
//       id: '1',
//       user: { id: '1', username: 'User' },
//       title: 'Javascript news',
//       subtitle: 'Javascript news subitle subtile',
//       img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
//       views: 1022,
//       createdAt: '26.02.2022',
//       type: [ArticleType.IT],
//       blocks: [
//         {
//           id: '1',
//           type: ArticleBlockType.TEXT,
//           title: 'Блок 1',
//           paragraphs: [
//             'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
//           ]
//         },
//         {
//           id: '4',
//           type: ArticleBlockType.CODE,
//           code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
//         },
//         {
//           id: '5',
//           type: ArticleBlockType.TEXT,
//           title: 'Блок 1',
//           paragraphs: [
//             'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
//           ]
//         },
//         {
//           id: '2',
//           type: ArticleBlockType.IMAGE,
//           src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
//           title: 'Image 1'
//         },
//         {
//           id: '3',
//           type: ArticleBlockType.CODE,
//           code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
//         },
//         {
//           id: '7',
//           type: ArticleBlockType.TEXT,
//           title: 'Title',
//           paragraphs: [
//             'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
//           ]
//         },
//         {
//           id: '8',
//           type: ArticleBlockType.IMAGE,
//           src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
//           title: 'Title'
//         },
//         {
//           id: '9',
//           type: ArticleBlockType.TEXT,
//           title: 'Title',
//           paragraphs: [
//             'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
//           ]
//         }
//       ]
//     }

//     const state: DeepPartial<ArticlesPageSchema> = {
//       isLoading: false,
//       error: 'error',
//       ids: ['1'],
//       entities: { 1: article }
//     }

//     const expected: DeepPartial<ArticlesPageSchema> = {
//       isLoading: true,
//       error: undefined,
//       ids: [],
//       entities: {}
//     }

//     expect(
//       articlesPageReducer(
//         state as ArticlesPageSchema,
//         fetchArticlesList.pending('', { replace: true })
//       )
//     ).toEqual(expected)
//   })

//   test('fetchArticlesList.fulfilled', () => {
//     const article: Article = {
//       id: '1',
//       user: { id: '1', username: 'User' },
//       title: 'Javascript news',
//       subtitle: 'Javascript news subitle subtile',
//       img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
//       views: 1022,
//       createdAt: '26.02.2022',
//       type: [ArticleType.IT],
//       blocks: [
//         {
//           id: '1',
//           type: ArticleBlockType.TEXT,
//           title: 'Блок 1',
//           paragraphs: [
//             'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
//           ]
//         },
//         {
//           id: '4',
//           type: ArticleBlockType.CODE,
//           code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
//         },
//         {
//           id: '5',
//           type: ArticleBlockType.TEXT,
//           title: 'Блок 1',
//           paragraphs: [
//             'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
//           ]
//         },
//         {
//           id: '2',
//           type: ArticleBlockType.IMAGE,
//           src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
//           title: 'Image 1'
//         },
//         {
//           id: '3',
//           type: ArticleBlockType.CODE,
//           code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
//         },
//         {
//           id: '7',
//           type: ArticleBlockType.TEXT,
//           title: 'Title',
//           paragraphs: [
//             'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
//           ]
//         },
//         {
//           id: '8',
//           type: ArticleBlockType.IMAGE,
//           src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
//           title: 'Title'
//         },
//         {
//           id: '9',
//           type: ArticleBlockType.TEXT,
//           title: 'Title',
//           paragraphs: [
//             'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
//           ]
//         }
//       ]
//     }

//     const state: DeepPartial<ArticlesPageSchema> = {
//       isLoading: true,
//       error: undefined,
//       ids: [],
//       entities: {}
//     }

//     const expected: DeepPartial<ArticlesPageSchema> = {
//       isLoading: false,
//       error: undefined,
//       ids: ['1'],
//       entities: { 1: article },
//       hasMore: true
//     }

//     expect(
//       articlesPageReducer(
//         state as ArticlesPageSchema,
//         fetchArticlesList.fulfilled([article], '', {})
//       )
//     ).toEqual(expected)
//   })

//   test('fetchArticlesList.rejected', () => {
//     const state: DeepPartial<ArticlesPageSchema> = {
//       isLoading: true,
//       error: undefined
//     }

//     const expectedError = 'error'

//     const expected: DeepPartial<ArticlesPageSchema> = {
//       isLoading: false,
//       error: expectedError,
//       ids: [],
//       entities: {}
//     }

//     expect(
//       articlesPageReducer(
//         state as ArticlesPageSchema,
//         fetchArticlesList.rejected(new Error(), '', {}, expectedError)
//       )
//     ).toEqual(expected)
//   })
// })

// TODO
