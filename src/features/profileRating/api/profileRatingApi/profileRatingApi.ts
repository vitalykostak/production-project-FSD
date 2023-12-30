import { type RatingInterface } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface GetProfileRating {
  userId: string
  profileId: string
}

interface RateProfileProps extends RatingInterface {
  userId: string
  profileId: string
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getProfileRating: build.query<RatingInterface[], GetProfileRating>({
      query: (params) => ({
        url: '/profile-rating',
        params
      })
    }),
    rateProfile: build.mutation<undefined, RateProfileProps>({
      query: (props) => ({
        url: '/profile-rating',
        body: props,
        method: 'POST'
      })
    })
  })
})

export const { useGetProfileRatingQuery, useRateProfileMutation } = articleRatingApi
