import { createAsyncThunk } from '@reduxjs/toolkit'

import { type OverriddenThunkConfig } from '@/app/providers/StoreProvider'
import { userActions, type User } from '@/entities/User'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    OverriddenThunkConfig<string>
>('login/loginByUserName', async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi

    try {
        const result = await extra.api.post<User>('/login', authData)

        if (!result.data) {
            throw new Error()
        }

        dispatch(userActions.setAuthData(result.data))

        return result.data
    } catch (e) {
        return rejectWithValue('error')
    }
})
