import {
    type ReducersMapObject,
    type AnyAction,
    type CombinedState,
    type EnhancedStore,
    type Reducer,
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'

import { type CounterSchema } from '@/entities/Counter'
import { type ProfileSchema } from '@/features/EditableProfileCard'
import { type UserSchema } from '@/entities/User'
import { type LoginSchema } from '@/features/AuthByUsername'
import { type ArticleDetailsSchema } from '@/entities/Articles'
import { type ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage'
import { type AddCommentFormSchema } from '@/features/AddCommentForm'
import { type ArticlesPageSchema } from '@/pages/ArticlesPage'
import { type SaveScrollPositionSchema } from '@/features/SaveScrollPosition'
import { type rtkApi } from '@/shared/api/rtkApi'

import { type AppDispatch } from './store'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    saveScrollPosition: SaveScrollPositionSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    // Async reducers
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsPage?: ArticleDetailsPageSchema
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
}

export interface OverriddenThunkConfig<RejectValueType> {
    dispatch: AppDispatch
    rejectValue: RejectValueType
    extra: ThunkExtraArg
    state: StateSchema
}
