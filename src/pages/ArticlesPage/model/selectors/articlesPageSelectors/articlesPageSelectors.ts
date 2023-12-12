import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleListView } from 'entities/Articles'

export const getArticlesPageLoading = (state: StateSchema) => state.articlesPage?.isLoading

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error

export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleListView.SMALL

export const getArticlesPagePage = (state: StateSchema) => state.articlesPage?.page || 1

export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9

export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore
