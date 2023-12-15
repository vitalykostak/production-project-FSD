import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { initArticlesPage } from './initArticlesPage'
import { type StateSchema } from 'app/providers/StoreProvider'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('initArticlesPage', () => {
  test('initArticlesPage success', async () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        _initialized: false
      }
    }

    const thunk = new TestAsyncThunk(initArticlesPage, state)

    const result = await thunk.callThunk(jest.fn() as unknown as URLSearchParams)

    expect(thunk.dispatch).toHaveBeenCalledTimes(4)

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(fetchArticlesList).toHaveBeenCalledWith({ })
  })

  test('should not fetch if _initialized === true', async () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        _initialized: true
      }
    }

    const thunk = new TestAsyncThunk(initArticlesPage, state)

    await thunk.callThunk(jest.fn() as unknown as URLSearchParams)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})
