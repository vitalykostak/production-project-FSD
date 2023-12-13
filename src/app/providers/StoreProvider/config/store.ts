import { type ReducersMapObject, configureStore, type Reducer, type CombinedState } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './createReducerManager'
import { $api } from 'shared/api/api'
import { saveScrollPositionReducer } from 'features/SaveScrollPosition'

export const configureReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    saveScrollPosition: saveScrollPositionReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: IS_DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api
        }
      }
    })
  })

  // @ts-expect-error this type will be fixed in future
  store.reducerManager = reducerManager
  return store
}

export type AppDispatch = ReturnType<typeof configureReduxStore>['dispatch']
