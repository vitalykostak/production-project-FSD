import { rtkApi } from '@/shared/api/rtkApi'

import { type User, type UserJsonSettings } from '../../model/types/user'

interface UpdateUserJsonSettingsMutationProps {
    userId: string
    jsonSettings: UserJsonSettings
}

const userApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        updateUserJsonSettingsMutation: build.mutation<User, UpdateUserJsonSettingsMutationProps>({
            query: ({ userId, jsonSettings }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
        getUserDataById: build.mutation<User, string>({
            query: userId => ({
                url: `/users/${userId}`,
                method: 'GET',
            }),
        }),
    }),
})

export const updateUserJsonSettingsMutation =
    userApi.endpoints.updateUserJsonSettingsMutation.initiate

export const getUserDataById = userApi.endpoints.getUserDataById.initiate
