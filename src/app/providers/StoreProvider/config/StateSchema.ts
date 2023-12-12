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
import { type ArticleDetailsSchema } from 'entities/Articles'
import { type ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage'
import { type AddCommentFormSchema } from 'features/AddCommentForm'
import { type ArticlesPageSchema } from 'pages/ArticlesPage'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
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
  state: StateSchema
}
