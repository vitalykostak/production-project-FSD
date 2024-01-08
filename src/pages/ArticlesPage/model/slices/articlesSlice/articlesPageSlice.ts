import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { type Article, ArticleListView, ArticlesSortField, ArticleType } from '@/entities/Articles'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { ARTICLES_PAGE_ARTICLES_VIEW } from '@/shared/consts/localStorageKeys'
import { type SortOrder } from '@/shared/types'

import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList'
import { type ArticlesPageSchema } from '../../types/articlesPageSchema'

const initialState: ArticlesPageSchema = {
    view: ArticleListView.SMALL,
    isLoading: false,
    page: 1,
    limit: 9,
    order: 'asc',
    sort: ArticlesSortField.CREATED,
    search: '',
    type: ArticleType.ALL,
    hasMore: true,
    ids: [],
    entities: {},
    _initialized: false,
}

const articlesPageAdapter = createEntityAdapter<Article>({
    selectId: article => article.id,
})

export const getArticlesPageSelectors = articlesPageAdapter.getSelectors<StateSchema>(
    state => state.articlesPage || articlesPageAdapter.getInitialState(),
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
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload
        },
        setSort: (state, action: PayloadAction<ArticlesSortField>) => {
            state.sort = action.payload
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload
        },
        initState: state => {
            const storedView = localStorage.getItem(ARTICLES_PAGE_ARTICLES_VIEW) as ArticleListView
            const selectedView = Object.values(ArticleListView).some(v => v === storedView)
                ? storedView
                : ArticleListView.SMALL
            state.view = selectedView
            state.limit = selectedView === ArticleListView.SMALL ? 9 : 4
            state._initialized = true
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchArticlesList.pending, (state, action) => {
            state.isLoading = true
            state.error = undefined
            if (action.meta.arg.replace) {
                articlesPageAdapter.removeAll(state)
            }
        })
        builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = undefined
            state.hasMore = action.payload?.length > 0

            if (action.meta.arg.replace) {
                articlesPageAdapter.setAll(state, action.payload)
            } else {
                articlesPageAdapter.addMany(state, action.payload)
            }
        })
        builder.addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
            articlesPageAdapter.removeAll(state)
        })
    },
})

// Action creators are generated for each case reducer function
export const articlesPageActions = articlesPageSlice.actions
export const articlesPageReducer = articlesPageSlice.reducer
