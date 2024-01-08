import { buildSelector } from '@/shared/lib/store'

export const [useArticleDetailsLoading, getArticleDetailsLoading] = buildSelector(
    state => state.articleDetails?.isLoading,
)

export const [useArticleDetailsData, getArticleDetailsData] = buildSelector(state => state.articleDetails?.data)

export const [useArticleDetailsError, getArticleDetailsError] = buildSelector(state => state.articleDetails?.error)
