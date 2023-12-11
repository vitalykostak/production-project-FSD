import { fetchArticleCommentsByArticleId } from '../../services/fetchArticleCommentsByArticleId/fetchArticleCommentsByArticleId'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'

describe('articleDetailsCommentsSlice', () => {
  test('fetchArticleCommentsByArticleId.pending', () => {
    const state = {
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {}
    }
    const expected = {
      isLoading: true,
      error: undefined,
      ids: [],
      entities: {}
    }

    expect(
      articleDetailsCommentsReducer(
        state,
        fetchArticleCommentsByArticleId.pending
      )
    ).toEqual(expected)
  })

  test('fetchArticleCommentsByArticleId.fulfilled', () => {
    const state = {
      isLoading: true,
      error: undefined,
      ids: [],
      entities: {}
    }

    const comment = {
      id: '1',
      text: 'Example text',
      user: { id: '1', username: 'User' }
    }

    const expected = {
      isLoading: false,
      error: undefined,
      ids: ['1'],
      entities: {
        1: comment
      }
    }

    expect(
      articleDetailsCommentsReducer(
        state,
        fetchArticleCommentsByArticleId.fulfilled([comment], '', '')
      )
    ).toEqual(expected)
  })

  test('fetchArticleCommentsByArticleId.rejected', () => {
    const comment = {
      id: '1',
      text: 'Example text',
      user: { id: '1', username: 'User' }
    }

    const state = {
      isLoading: true,
      error: undefined,
      ids: ['1'],
      entities: {
        1: comment
      }
    }

    const expected = {
      isLoading: false,
      error: 'error',
      ids: [],
      entities: {}
    }

    expect(
      articleDetailsCommentsReducer(
        state,
        fetchArticleCommentsByArticleId.rejected(new Error(), '', '', 'error')
      )
    ).toEqual(expected)
  })
})
