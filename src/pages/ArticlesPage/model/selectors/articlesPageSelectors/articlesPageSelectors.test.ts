import { type StateSchema } from '@/app/providers/StoreProvider'
import { ArticleListView } from '@/entities/Articles/testing'

import { getArticlesPageError, getArticlesPageLoading, getArticlesPageView } from './articlesPageSelectors'

describe('articlesPageSelectors', () => {
    test('should return "isLoading"', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
            },
        }

        expect(getArticlesPageLoading(state as StateSchema)).toEqual(true)
    })
    test('should return "error"', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: 'error',
            },
        }

        expect(getArticlesPageError(state as StateSchema)).toEqual('error')
    })

    test('should return "view"', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleListView.BIG,
            },
        }

        expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleListView.BIG)
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getArticlesPageLoading(state as StateSchema)).toEqual(undefined)
        expect(getArticlesPageError(state as StateSchema)).toEqual(undefined)
        expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleListView.SMALL)
    })
})
