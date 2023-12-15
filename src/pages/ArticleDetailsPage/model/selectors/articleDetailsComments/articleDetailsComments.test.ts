import { type StateSchema } from 'app/providers/StoreProvider'
import {
  getArticleDetailsCommentsError,
  getArticleDetailsCommentsLoading
} from './articleDetailsComments'

describe('articleDetailsComments', () => {
  test('Should return value "isLoading"', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: { comments: { isLoading: true } }
    }

    expect(getArticleDetailsCommentsLoading(state as StateSchema)).toBe(true)
  })

  test('Should return value "error"', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          error: 'error'
        }
      }
    }

    expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(
      'error'
    )
  })

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticleDetailsCommentsLoading(state as StateSchema)).toEqual(
      undefined
    )
    expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(
      undefined
    )
  })
})
