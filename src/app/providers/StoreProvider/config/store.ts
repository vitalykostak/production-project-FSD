import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './createReducerManager'
import { $api } from 'shared/api/api'
import { type NavigateFunction } from 'react-router-dom'

export const configureReduxStore = (
  navigate: NavigateFunction,
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: IS_DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate
        }
      }
    })
  })

  // @ts-expect-error this type will be fixed in future
  store.reducerManager = reducerManager
  return store
}

export type AppDispatch = ReturnType<typeof configureReduxStore>['dispatch']
