import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../types/user'
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorageKeys'

const initialState: UserSchema = {}

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
