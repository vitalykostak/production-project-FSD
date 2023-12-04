import { type ReactNode, type FC } from 'react'
import { Provider } from 'react-redux'
import { configureReduxStore } from '../config/store'
import { type StateSchema } from '../config/StateSchema'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props

  const navigate = useNavigate()

  const store = configureReduxStore(
    navigate,
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  )

  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
