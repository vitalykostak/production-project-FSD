import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'

const ReduxStoreDecorator =
  (initialState: DeepPartial<StateSchema>) => (Story: StoryFn) => {
    return (
      <StoreProvider initialState={initialState as StateSchema}>
        <Story />
      </StoreProvider>
    )
  }

export default ReduxStoreDecorator
