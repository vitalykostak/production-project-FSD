import { createSelector } from '@reduxjs/toolkit'

import { type StateSchema } from '@/app/providers/StoreProvider'

export const getSavedScrollPositions = (state: StateSchema) => state.saveScrollPosition.scroll

export const getSavedScrollPositionByPath = createSelector(
    getSavedScrollPositions,
    (state: StateSchema, path: string) => path,
    (savedPositions, path) => savedPositions[path] || 0,
)
