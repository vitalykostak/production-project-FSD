import {
  type PayloadAction,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { type Comment } from '@/entities/Comment'
import { type ArticleDetailsCommentsSchema } from '../../types/articleDetailsCommentsSchema'
import { fetchArticleCommentsByArticleId } from '../../services/fetchArticleCommentsByArticleId/fetchArticleCommentsByArticleId'

const initialState: ArticleDetailsCommentsSchema = {
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {}
}

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id
})

export const getArticleDetailsCommentsSelectors =
  commentsAdapter.getSelectors<StateSchema>(
    (state) =>
      state?.articleDetailsPage?.comments || commentsAdapter.getInitialState()
  )

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: commentsAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleCommentsByArticleId.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(
      fetchArticleCommentsByArticleId.fulfilled,
      (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false
        state.error = undefined
        commentsAdapter.setAll(state, action.payload)
      }
    )
    builder.addCase(
      fetchArticleCommentsByArticleId.rejected,
      (state, action) => {
        state.isLoading = false
        state.error = action.payload
        commentsAdapter.removeAll(state)
      }
    )
  }
})

// Action creators are generated for each case reducer function
export const articleDetailsCommentsReducer =
  articleDetailsCommentsSlice.reducer
