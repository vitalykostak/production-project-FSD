import { createAsyncThunk } from '@reduxjs/toolkit'

import { type OverriddenThunkConfig } from '@/app/providers/StoreProvider'
import { type ArticleType, type ArticlesSortField } from '@/entities/Articles'
import { type SortOrder } from '@/shared/types'

import {
  getArticlesPageInitialized
} from '../../selectors/articlesPageSelectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlesSlice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<
undefined,
URLSearchParams,
OverriddenThunkConfig<unknown>
>('articlesPage/initArticlesPage', (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi

  const state = getState()

  const _initialized = getArticlesPageInitialized(state)

  if (_initialized) {
    return
  }
  const orderFormUrl = searchParams?.get?.('order')
  const sortFormUrl = searchParams?.get?.('sort')
  const searchFormUrl = searchParams?.get?.('search')
  const typeFormUrl = searchParams?.get?.('type')

  orderFormUrl && dispatch(articlesPageActions.setOrder(orderFormUrl as SortOrder))
  sortFormUrl && dispatch(articlesPageActions.setSort(sortFormUrl as ArticlesSortField))
  searchFormUrl && dispatch(articlesPageActions.setSearch(searchFormUrl))
  typeFormUrl && dispatch(articlesPageActions.setType(typeFormUrl as ArticleType))

  void dispatch(articlesPageActions.initState())
  void dispatch(fetchArticlesList({}))

  return undefined
})
