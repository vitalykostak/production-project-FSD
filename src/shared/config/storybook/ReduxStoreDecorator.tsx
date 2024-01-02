import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'

import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { articleDetailsReducer } from '@/entities/Articles/testing'
import { addCommentFormReducer } from '@/features/AddCommentForm/testing'
import { loginReducer } from '@/features/AuthByUsername/testing'
import { saveScrollPositionReducer } from '@/features/SaveScrollPosition/testing'
import { type ReducersList } from '@/shared/lib'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing'
import { profileReducer } from '@/features/EditableProfileCard/testing'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  saveScrollPosition: saveScrollPositionReducer,
  articleDetailsPage: articleDetailsPageReducer
}

const ReduxStoreDecorator =
  (
    initialState: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
    (Story: StoryFn) => {
      return (
      <StoreProvider
        initialState={initialState}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
      )
    }

export default ReduxStoreDecorator
