import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { type ArticlesPageSchema } from '../../types/articlesPageSchema'
import { type Article, ArticleListView } from 'entities/Articles'
import { type StateSchema } from 'app/providers/StoreProvider'
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList'
import { ARTICLES_PAGE_ARTICLES_VIEW } from 'shared/consts/localStorageKeys'

const initialState: ArticlesPageSchema = {
  view: ArticleListView.SMALL,
  isLoading: false,
  page: 1,
  hasMore: true,
  ids: [],
  entities: {},
  _initialized: false
}

const articlesPageAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const getArticlesPageSelectors =
  articlesPageAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesPageAdapter.getInitialState()
  )

export const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesPageAdapter.getInitialState(initialState),
  reducers: {
    setView: (state, action: PayloadAction<ArticleListView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLES_PAGE_ARTICLES_VIEW, action.payload)
      state.limit = action.payload === ArticleListView.SMALL ? 9 : 4
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    initState: state => {
      const storedView = localStorage.getItem(ARTICLES_PAGE_ARTICLES_VIEW) as ArticleListView
      const selectedView = Object.values(ArticleListView).some(v => v === storedView) ? storedView : ArticleListView.SMALL
      state.view = selectedView
      state.limit = selectedView === ArticleListView.SMALL ? 9 : 4
      state._initialized = true
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesList.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(
      fetchArticlesList.fulfilled,
      (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        state.error = undefined
        articlesPageAdapter.addMany(state, action.payload)
        state.hasMore = action.payload?.length > 0
      }
    )
    builder.addCase(
      fetchArticlesList.rejected,
      (state, action) => {
        state.isLoading = false
        state.error = action.payload
        articlesPageAdapter.removeAll(state)
      }
    )
  }
})

// Action creators are generated for each case reducer function
export const articlesPageActions = articlesPageSlice.actions
export const articlesPageReducer = articlesPageSlice.reducer
