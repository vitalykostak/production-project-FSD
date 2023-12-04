import {
  type ReducersMapObject,
  type AnyAction,
  type CombinedState,
  type EnhancedStore,
  type Reducer
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type CounterSchema } from 'entities/Counter'
import { type ProfileSchema } from 'entities/Profile'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'
import { type NavigateFunction } from 'react-router-dom'
import { type AppDispatch } from './store'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  loginForm?: LoginSchema
  profile?: ProfileSchema
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

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate: NavigateFunction
}

export interface OverriddenThunkConfig<RejectValueType> {
  dispatch: AppDispatch
  rejectValue: RejectValueType
  extra: ThunkExtraArg
}
