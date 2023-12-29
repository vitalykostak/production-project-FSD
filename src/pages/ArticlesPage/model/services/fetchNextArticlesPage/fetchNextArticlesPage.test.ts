import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchNextArticlesPage } from './fetchNextArticlesPage'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchNextArticlesPage', () => {
  test('fetchNextArticlesPage success', async () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: false,
        ids: [],
        entities: {},
        page: 2,
        limit: 5,
        hasMore: true
      }
    }

    const thunk = new TestAsyncThunk(fetchNextArticlesPage, state)

    const result = await thunk.callThunk(undefined)

    expect(thunk.dispatch).toHaveBeenCalledTimes(4)

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(fetchArticlesList).toHaveBeenCalledWith({})
  })

  test('should not fetch if hasMore === false', async () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: false,
        ids: [],
        entities: {},
        page: 2,
        limit: 5,
        hasMore: false
      }
    }

    const thunk = new TestAsyncThunk(fetchNextArticlesPage, state)

    await thunk.callThunk(undefined)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(fetchArticlesList).not.toHaveBeenCalled()
  })

  test('should not fetch if isLoading === true', async () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: true,
        ids: [],
        entities: {},
        page: 2,
        limit: 5,
        hasMore: false
      }
    }

    const thunk = new TestAsyncThunk(fetchNextArticlesPage, state)

    await thunk.callThunk(undefined)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})
