import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { articleDetailsReducer } from 'entities/Articles/model/slice/articleDetailsSlice'
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice'
import { loginReducer } from 'features/AuthByUsername'
import { saveScrollPositionReducer } from 'features/SaveScrollPosition'
import { type ReducersList } from 'shared/lib'
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices'
import { profileReducer } from 'features/EditableProfileCard'

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
