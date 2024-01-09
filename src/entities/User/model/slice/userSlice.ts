import { type PayloadAction } from '@reduxjs/toolkit'

import { USER_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorageKeys'
import { buildSlice } from '@/shared/lib/store'
import { setFeatureFlags } from '@/shared/lib/featureFlags'

import { type User, type UserSchema } from '../types/user'

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
        },
        initAuthData: state => {
            const authData = localStorage.getItem(USER_LOCAL_STORAGE_KEY)

            if (authData) {
                const json = JSON.parse(authData) as unknown as User
                state.authData = json
                setFeatureFlags(json.features)
            }
            state._initialized = true
        },
        logout: state => {
            state.authData = undefined
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
        },
    },
})

// Action creators are generated for each case reducer function
export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
export const useUserActions = userSlice.useActions
