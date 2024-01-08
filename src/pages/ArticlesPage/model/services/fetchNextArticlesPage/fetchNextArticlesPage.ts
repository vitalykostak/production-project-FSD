import { createAsyncThunk } from '@reduxjs/toolkit'

import { type OverriddenThunkConfig } from '@/app/providers/StoreProvider'

import {
    getArticlesPageHasMore,
    getArticlesPageLoading,
    getArticlesPagePage,
} from '../../selectors/articlesPageSelectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlesSlice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const fetchNextArticlesPage = createAsyncThunk<
    undefined,
    undefined,
    OverriddenThunkConfig<unknown>
>('articlesPage/fetchNextArticlesPage', (_, thunkApi) => {
    const { getState, dispatch } = thunkApi

    const state = getState()

    const hasMore = getArticlesPageHasMore(state)
    const page = getArticlesPagePage(state)
    const isLoading = getArticlesPageLoading(state)

    if (!hasMore || isLoading) {
        return
    }
    dispatch(articlesPageActions.setPage(page + 1))
    void dispatch(fetchArticlesList({}))
    return undefined
})
