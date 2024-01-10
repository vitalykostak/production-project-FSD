import { type PayloadAction } from '@reduxjs/toolkit'

import { USER_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorageKeys'
import { buildSlice } from '@/shared/lib/store'
import { setFeatureFlags } from '@/shared/lib/featureFlags'

import { type User, type UserSchema } from '../types/user'
import { updateUserJsonSetting } from '../services/updateUserJsonSettings/updateUserJsonSettings'
import { initAuthData } from '../services/initAuthData/initAuthData'

const initialState: UserSchema = {
    authData: undefined,
    _initialized: false,
}

export const userSlice = buildSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
            setFeatureFlags(action.payload.features)

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, action.payload.id)
        },
        logout: state => {
            state.authData = undefined
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
        },
    },
    extraReducers: builder => {
        builder.addCase(updateUserJsonSetting.fulfilled, (state, action) => {
            if (state.authData) {
                state.authData.jsonSettings = action.payload
            }
        })
        builder.addCase(initAuthData.fulfilled, (state, action) => {
            state.authData = action.payload
            setFeatureFlags(action.payload.features)
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, action.payload.id)
            state._initialized = true
        })
        builder.addCase(initAuthData.rejected, state => {
            state._initialized = true
        })
    },
})

// Action creators are generated for each case reducer function
export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
export const useUserActions = userSlice.useActions
