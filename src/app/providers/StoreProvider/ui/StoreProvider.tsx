import { type ReactNode, type FC } from 'react'
import { Provider } from 'react-redux'
import { configureReduxStore } from '../config/store'
import { type StateSchema } from '../config/StateSchema'

interface StoreProviderProps {
  children: ReactNode
  initialState?: StateSchema
}

const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState } = props

  const store = configureReduxStore(initialState)

  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
