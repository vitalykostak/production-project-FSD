import { createAsyncThunk } from '@reduxjs/toolkit'
import { type OverriddenThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Articles'
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors/articlesPageSelectors'

interface FetchArticlesListProps {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<
Article[],
FetchArticlesListProps,
OverriddenThunkConfig<string>
>('articlesPage/fetchArticlesList', async (props, thunkApi) => {
  const { page = 1 } = props
  const { extra, rejectWithValue, getState } = thunkApi

  const limit = getArticlesPageLimit(getState())

  try {
    const result = await extra.api.get<Article[]>('/articles/', {
      params: { _expand: 'user', _limit: limit, _page: page }
    })

    if (!result.data) {
      throw new Error()
    }

    return result.data
  } catch (e) {
    return rejectWithValue('error')
  }
})
