import { type EntityState } from '@reduxjs/toolkit'
import { type ArticleListView, type Article, type ArticlesSortField, type ArticleType } from 'entities/Articles'

import { type SortOrder } from 'shared/types'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading: boolean
  view: ArticleListView
  limit: number
  page: number
  hasMore: boolean
  order: SortOrder
  sort: ArticlesSortField
  type: ArticleType
  search: string
  error?: string
  _initialized: boolean
}
