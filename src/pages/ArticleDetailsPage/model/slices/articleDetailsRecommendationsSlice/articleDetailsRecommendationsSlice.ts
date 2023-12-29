import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { type ArticleDetailsRecommendationsSchema } from '../../types/articleDetailsRecommendationsSchema'
import { type Article } from '@/entities/Articles'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { fetchRecommendationsList } from '../../services/fetchRecommendationsList/fetchRecommendationsList'

const initialState: ArticleDetailsRecommendationsSchema = {
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {}
}

const articleDetailsRecommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const getArticleDetailsRecommendationsSelectors =
  articleDetailsRecommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state?.articleDetailsPage?.recommendations ||
      articleDetailsRecommendationsAdapter.getInitialState()
  )

export const articleDetailsRecommendationsSlice = createSlice({
  name: 'articleDetailsRecommendations',
  initialState:
    articleDetailsRecommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(
      initialState
    ),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchRecommendationsList.pending, (state) => {
      state.isLoading = true
      state.error = undefined
      articleDetailsRecommendationsAdapter.removeAll(state)
    })
    builder.addCase(fetchRecommendationsList.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = undefined
      articleDetailsRecommendationsAdapter.setAll(state, action.payload)
    })
    builder.addCase(fetchRecommendationsList.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

// Action creators are generated for each case reducer function
export const articleDetailsRecommendationsActions =
  articleDetailsRecommendationsSlice.actions
export const articleDetailsRecommendationsReducer =
  articleDetailsRecommendationsSlice.reducer
