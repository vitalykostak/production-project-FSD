import {
  type ReducersMapObject,
  type AnyAction,
  type CombinedState,
  type EnhancedStore,
  type Reducer
} from '@reduxjs/toolkit'
import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  loginForm?: LoginSchema
}

export type StateSchemaKeys = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKeys, reduce: Reducer) => void
  remove: (key: StateSchemaKeys) => void
}

export interface StoreWithReducerManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}
