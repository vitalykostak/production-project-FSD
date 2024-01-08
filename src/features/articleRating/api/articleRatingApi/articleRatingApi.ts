import { type RatingInterface } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface GetArticleRating {
    userId: string
    articleId: string
}

interface RateArticleProps extends RatingInterface {
    userId: string
    articleId: string
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        getArticleRating: build.query<RatingInterface[], GetArticleRating>({
            query: params => ({
                url: '/article-rating',
                params,
            }),
        }),
        rateArticle: build.mutation<undefined, RateArticleProps>({
            query: props => ({
                url: '/article-rating',
                body: props,
                method: 'POST',
            }),
        }),
    }),
})

export const { useGetArticleRatingQuery, useRateArticleMutation } = articleRatingApi
