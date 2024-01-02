import { createAsyncThunk } from '@reduxjs/toolkit'

import { type OverriddenThunkConfig } from '@/app/providers/StoreProvider'
import { ArticleType, type Article } from '@/entities/Articles'
import { addQueryParams } from '@/shared/lib'

import {
  getArticlesPageLimit,
  getArticlesPageOrder,
  getArticlesPagePage,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType
} from '../../selectors/articlesPageSelectors/articlesPageSelectors'

interface FetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
Article[],
FetchArticlesListProps,
OverriddenThunkConfig<string>
>('articlesPage/fetchArticlesList', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi

  const state = getState()

  const limit = getArticlesPageLimit(state)
  const page = getArticlesPagePage(state)
  const sort = getArticlesPageSort(state)
  const order = getArticlesPageOrder(state)
  const search = getArticlesPageSearch(state)
  const type = getArticlesPageType(state)

  try {
    addQueryParams?.({
      sort,
      order,
      search,
      type: type === ArticleType.ALL ? undefined : type
    })

    const result = await extra.api.get<Article[]>('/articles/', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _order: order,
        _sort: sort,
        q: search,
        type: type === ArticleType.ALL ? undefined : type
      }
    })

    if (!result.data) {
      throw new Error()
    }

    return result.data
  } catch (e) {
    return rejectWithValue('error')
  }
})
