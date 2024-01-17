import { rtkApi } from '@/shared/api/rtkApi'
import { type FeatureFlags } from '@/shared/types'

interface UpdateUserFeatureFlagsMutationProps {
    userId: string
    featureFlags: Partial<FeatureFlags>
}

const userApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        updateUserFeatureFlagsMutation: build.mutation<
            undefined,
            UpdateUserFeatureFlagsMutationProps
        >({
            query: ({ userId, featureFlags }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    features: featureFlags,
                },
            }),
        }),
    }),
})

export const updateUserFeatureFlagsMutation =
    userApi.endpoints.updateUserFeatureFlagsMutation.initiate
