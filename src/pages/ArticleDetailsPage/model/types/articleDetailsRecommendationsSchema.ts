import { type EntityState } from '@reduxjs/toolkit'

import { type Article } from '@/entities/Articles'

export interface ArticleDetailsRecommendationsSchema extends EntityState<Article> {
  isLoading: boolean
  error?: string
}
