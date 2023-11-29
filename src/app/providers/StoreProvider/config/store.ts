import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'

export const configureReduxStore = (initialState?: StateSchema) =>
  configureStore<StateSchema>({
    reducer: {
      counter: counterReducer
    },
    devTools: IS_DEV,
    preloadedState: initialState
  })
