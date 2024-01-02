import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { USER_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorageKeys'

import { type User, type UserSchema } from '../types/user'

const initialState: UserSchema = {
  authData: undefined,
  _initialized: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const authData = localStorage.getItem(USER_LOCAL_STORAGE_KEY)
      if (authData) {
        state.authData = JSON.parse(authData)
      }
      state._initialized = true
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
    }
  }
})

// Action creators are generated for each case reducer function
export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
