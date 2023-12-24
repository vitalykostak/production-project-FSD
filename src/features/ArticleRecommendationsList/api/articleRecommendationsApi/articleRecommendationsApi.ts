import { rtkApi } from 'shared/api/rtkApi'

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationList: build.query({
      query: (limit: number) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      })
    })
  })
})

export const useGetArticleRecommendationListQuery = recommendationsApi.useGetArticleRecommendationListQuery
