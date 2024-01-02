import { createAsyncThunk } from '@reduxjs/toolkit'

import { type OverriddenThunkConfig } from '@/app/providers/StoreProvider'
import { type Article } from '@/entities/Articles'

export const fetchRecommendationsList = createAsyncThunk<
Article[],
undefined,
OverriddenThunkConfig<string>
>('articleDetailsPage/fetchRecommendationsList', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi

  try {
    const result = await extra.api.get<Article[]>('/articles/', {
      params: {
        _limit: 4
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
