import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { fetchArticleCommentsByArticleId } from './fetchArticleCommentsByArticleId'

describe('fetchArticleCommentsByArticleId', () => {
  test('fetchArticleCommentsByArticleId success', async () => {
    const thunkProp = '1'
    const comments = [
      {
        id: '1',
        text: 'Comment 1',
        user: { id: '1', username: 'User1' }
      },
      {
        id: '2',
        text: 'Comment 2',
        user: { id: '1', username: 'User2' }
      }
    ]
    const thunk = new TestAsyncThunk(fetchArticleCommentsByArticleId)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }))
    const result = await thunk.callThunk(thunkProp)

    expect(thunk.api.get).toHaveBeenCalledTimes(1)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(comments)
  })

  test('fetchArticleCommentsByArticleId error', async () => {
    const thunkProp = '1'

    const thunk = new TestAsyncThunk(fetchArticleCommentsByArticleId)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 404 }))
    const result = await thunk.callThunk(thunkProp)

    expect(thunk.api.get).toHaveBeenCalledTimes(1)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
  })

  test('fetchArticleCommentsByArticleId without argument', async () => {
    const thunkProp = undefined

    const thunk = new TestAsyncThunk(fetchArticleCommentsByArticleId)

    const result = await thunk.callThunk(thunkProp)

    expect(thunk.api.get).not.toHaveBeenCalled()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
  })
})
