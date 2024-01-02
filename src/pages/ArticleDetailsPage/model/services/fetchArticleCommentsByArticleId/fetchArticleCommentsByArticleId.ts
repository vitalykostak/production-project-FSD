import { createAsyncThunk } from '@reduxjs/toolkit'

import { type OverriddenThunkConfig } from '@/app/providers/StoreProvider'
import { type Comment } from '@/entities/Comment'

export const fetchArticleCommentsByArticleId = createAsyncThunk<
Comment[],
string | undefined,
OverriddenThunkConfig<string>
>(
  'articleDetailsComments/fetchArticleCommentsByArticleId',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    if (!articleId) {
      return rejectWithValue('error')
    }

    try {
      const result = await extra.api.get<Comment[]>('/comments/', {
        params: { articleId, _expand: 'user' }
      })

      if (!result.data) {
        throw new Error()
      }

      return result.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
