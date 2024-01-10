import { createAsyncThunk } from '@reduxjs/toolkit'

import { type OverriddenThunkConfig } from '@/app/providers/StoreProvider'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorageKeys'

import { getUserDataById } from '../../../api/userApi/userApi'
import { type User } from '../../types/user'

export const initAuthData = createAsyncThunk<User, undefined, OverriddenThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi

        const userId = localStorage.getItem(USER_LOCAL_STORAGE_KEY)

        if (!userId) {
            return rejectWithValue('')
        }

        try {
            const user = await dispatch(getUserDataById(userId)).unwrap()

            if (!user) {
                return rejectWithValue('')
            }

            return user
        } catch (error) {
            console.error(error)
            return rejectWithValue('')
        }
    },
)
