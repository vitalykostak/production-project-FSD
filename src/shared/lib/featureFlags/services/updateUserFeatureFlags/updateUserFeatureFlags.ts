import { createAsyncThunk } from '@reduxjs/toolkit'

import { type OverriddenThunkConfig } from '@/app/providers/StoreProvider'
import { type FeatureFlags } from '@/shared/types'

import { updateUserFeatureFlagsMutation } from '../../api/featureFlagsApi/featureFlagsApi'
import { getAllFeatureFlags } from '../../lib/featureFlagsManager'

export const updateUserFeatureFlags = createAsyncThunk<
    undefined,
    Partial<FeatureFlags>,
    OverriddenThunkConfig<string>
>('user/updateFeatureFlags', async (props, thunkApi) => {
    const { getState, rejectWithValue, dispatch } = thunkApi

    const userId = getState()?.user?.authData?.id

    if (!userId) {
        return rejectWithValue('')
    }

    try {
        await dispatch(
            updateUserFeatureFlagsMutation({
                userId,
                featureFlags: {
                    ...getAllFeatureFlags(),
                    ...props,
                },
            }),
        )

        window?.location?.reload()
    } catch (error) {
        console.error(error)
        return rejectWithValue('')
    }
})
