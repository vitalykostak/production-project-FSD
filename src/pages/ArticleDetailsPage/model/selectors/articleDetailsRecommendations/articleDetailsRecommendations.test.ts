import { type StateSchema } from '@/app/providers/StoreProvider'
import {
  getArticleDetailsRecommendationsError,
  getArticleDetailsRecommendationsLoading
} from './articleDetailsRecommendations'

describe('articleDetailsRecommendations', () => {
  test('Should return value "isLoading"', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        recommendations: { isLoading: true }
      }
    }

    expect(getArticleDetailsRecommendationsLoading(state as StateSchema)).toBe(
      true
    )
  })

  test('Should return value "error"', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        recommendations: {
          error: 'error'
        }
      }
    }

    expect(getArticleDetailsRecommendationsError(state as StateSchema)).toEqual(
      'error'
    )
  })

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(
      getArticleDetailsRecommendationsLoading(state as StateSchema)
    ).toEqual(undefined)
    expect(getArticleDetailsRecommendationsError(state as StateSchema)).toEqual(
      undefined
    )
  })
})
