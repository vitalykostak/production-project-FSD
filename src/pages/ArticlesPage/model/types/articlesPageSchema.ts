import { type EntityState } from '@reduxjs/toolkit'
import { type ArticleListView, type Article } from 'entities/Articles'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading: boolean
  view: ArticleListView
  limit?: number
  page: number
  hasMore: boolean
  error?: string
}
