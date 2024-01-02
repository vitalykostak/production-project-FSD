import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { type SaveScrollPositionSchema } from '../../types/saveScrollPositionSchema'

const initialState: SaveScrollPositionSchema = {
  scroll: {}
}

export const saveScrollPositionSlice = createSlice({
  name: 'saveScrollPosition',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      action: PayloadAction<{ path: string, position: number }>
    ) => {
      state.scroll[action.payload.path] = action.payload.position
    }
  }
})

// Action creators are generated for each case reducer function
export const saveScrollPositionActions = saveScrollPositionSlice.actions
export const saveScrollPositionReducer = saveScrollPositionSlice.reducer
