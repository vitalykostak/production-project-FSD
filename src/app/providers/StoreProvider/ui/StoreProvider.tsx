import { type ReactNode, type FC } from 'react'
import { Provider } from 'react-redux'
import { configureReduxStore } from '../config/store'
import { type StateSchema } from '../config/StateSchema'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props

  const store = configureReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  )

  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
