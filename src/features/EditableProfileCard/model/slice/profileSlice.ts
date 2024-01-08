import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type Profile } from '@/entities/Profile'

import { type ProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    data: undefined,
    form: undefined,
    error: undefined,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            }
        },
        cancelUpdate: state => {
            state.error = undefined
            state.readonly = true
            state.form = state.data
            state.validateError = undefined
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProfileData.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.error = undefined
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
                state.data = undefined
            })
            .addCase(updateProfileData.pending, state => {
                state.validateError = undefined
                state.isLoading = true
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.validateError = undefined
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.validateError = action.payload
                state.isLoading = false
                state.form = state.data
            })
    },
})

// Action creators are generated for each case reducer function
export const profileActions = profileSlice.actions

export const profileReducer = profileSlice.reducer
