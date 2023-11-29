import { type StoryFn } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'

const ReduxStoreDecorator = (Story: StoryFn) => {
  const ininitialState: StateSchema = {
    counter: {
      value: 10
    }
  }

  return (
    <StoreProvider initialState={ininitialState}>
      <Story />
    </StoreProvider>
  )
}

export default ReduxStoreDecorator
