import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsRecommendationsLoading = (state: StateSchema) => state?.articleDetailsPage?.recommendations?.isLoading

export const getArticleDetailsRecommendationsError = (state: StateSchema) => state?.articleDetailsPage?.recommendations?.error
