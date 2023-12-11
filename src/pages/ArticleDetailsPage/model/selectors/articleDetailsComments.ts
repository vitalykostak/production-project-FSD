import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsCommentsLoading = (state: StateSchema) => state?.articleDetailsComments?.isLoading

export const getArticleDetailsCommentsError = (state: StateSchema) => state?.articleDetailsComments?.error
