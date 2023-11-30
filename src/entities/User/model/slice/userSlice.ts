import { createSlice } from '@reduxjs/toolkit'
import { type UserSchema } from '../types/user'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {}
})

// Action creators are generated for each case reducer function
export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
