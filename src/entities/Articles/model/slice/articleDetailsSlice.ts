import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { type Article } from '../types/articles'

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchArticleById.pending,
      (state) => {
        state.isLoading = true
        state.error = undefined
        state.data = undefined
      }
    )
    builder.addCase(
      fetchArticleById.fulfilled,
      (state, action: PayloadAction<Article>) => {
        state.isLoading = false
        state.error = undefined
        state.data = action.payload
      }
    )
    builder.addCase(
      fetchArticleById.rejected,
      (state, action) => {
        state.isLoading = false
        state.error = action.payload
        state.data = undefined
      }
    )
  }

})

// Action creators are generated for each case reducer function
export const articleDetailsActions = articleDetailsSlice.actions
export const articleDetailsReducer = articleDetailsSlice.reducer
