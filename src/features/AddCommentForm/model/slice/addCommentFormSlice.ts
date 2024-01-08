import { type PayloadAction } from '@reduxjs/toolkit'

import { buildSlice } from '@/shared/lib/store'

import { type AddCommentFormSchema } from '../types/addCommentFormSchema'

const initialState: AddCommentFormSchema = {
    text: undefined,
    error: undefined,
}

export const addCommentFormSlice = buildSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const addCommentFormActions = addCommentFormSlice.actions
export const addCommentFormReducer = addCommentFormSlice.reducer
export const useAddCommentFormActions = addCommentFormSlice.useActions
