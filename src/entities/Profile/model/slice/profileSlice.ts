import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  data: undefined,
  error: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  }
})

// Action creators are generated for each case reducer function
export const profileActions = profileSlice.actions

export const profileReducer = profileSlice.reducer
