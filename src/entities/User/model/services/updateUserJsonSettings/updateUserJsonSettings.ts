import { createAsyncThunk } from '@reduxjs/toolkit'

import { type OverriddenThunkConfig } from '@/app/providers/StoreProvider'

import { updateUserJsonSettingsMutation } from '../../../api/userApi/userApi'
import { type UserJsonSettings } from '../../types/user'
import { getUserAuthData } from '../../selectors/getUserAuthData/getUserAuthData'

export const updateUserJsonSetting = createAsyncThunk<
    UserJsonSettings,
    UserJsonSettings,
    OverriddenThunkConfig<string>
>('user/updateUserJsonSettings', async (props, thunkApi) => {
    const { getState, rejectWithValue, dispatch } = thunkApi

    const newJsonSettings = { ...props }
    const user = getUserAuthData(getState())

    if (!user) {
        return rejectWithValue('')
    }

    const currentJsonSettings = user?.jsonSettings || {}

    try {
        const updatedUser = await dispatch(
            updateUserJsonSettingsMutation({
                userId: user.id,
                jsonSettings: {
                    ...currentJsonSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap()

        if (!updatedUser.jsonSettings) {
            return rejectWithValue('')
        }

        return updatedUser.jsonSettings
    } catch (error) {
        console.error(error)
        return rejectWithValue('')
    }
})
