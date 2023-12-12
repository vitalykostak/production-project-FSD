import { type Reducer } from '@reduxjs/toolkit'
import {
  type StoreWithReducerManager,
  type StateSchemaKeys
} from 'app/providers/StoreProvider/config/StateSchema'
import { useEffect, type FC, type ReactNode } from 'react'
import { useStore } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks'

export type ReducersList = {
  [reducerName in StateSchemaKeys]?: Reducer;
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  shouldRemoveOnUnmout?: boolean
  children: ReactNode
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { reducers, children, shouldRemoveOnUnmout } = props
  const store = useStore() as StoreWithReducerManager
  const dispatch = useAppDispatch()

  useEffect(() => {
    const entries = Object.entries(reducers)

    entries.forEach(([reducerName, reducer]) => {
      store.reducerManager.add(reducerName as StateSchemaKeys, reducer)
      dispatch({ type: `@INIT ${reducerName} reducer` })
    })

    return () => {
      if (shouldRemoveOnUnmout) {
        entries.forEach(([reducerName]) => {
          dispatch({ type: `@DESTROY ${reducerName} reducer` })
          store.reducerManager.remove(reducerName as StateSchemaKeys)
        })
      }
    }
    // eslint-disable-next-line
  }, []);

  return children
}

export default DynamicModuleLoader
