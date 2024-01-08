import { type StateSchema } from '@/app/providers/StoreProvider'

export const getArticleDetailsCommentsLoading = (state: StateSchema) =>
    state?.articleDetailsPage?.comments?.isLoading

export const getArticleDetailsCommentsError = (state: StateSchema) =>
    state?.articleDetailsPage?.comments?.error
