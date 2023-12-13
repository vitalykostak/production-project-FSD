import { createAsyncThunk } from '@reduxjs/toolkit'
import { type OverriddenThunkConfig } from 'app/providers/StoreProvider'
import {
  getArticlesPageInitialized
} from '../../selectors/articlesPageSelectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlesSlice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<
undefined,
undefined,
OverriddenThunkConfig<unknown>
>('articlesPage/initArticlesPage', (_, thunkApi) => {
  const { getState, dispatch } = thunkApi

  const state = getState()

  const _initialized = getArticlesPageInitialized(state)

  if (_initialized) {
    return
  }

  void dispatch(articlesPageActions.initState())
  void dispatch(fetchArticlesList({ page: 1 }))

  return undefined
})
