import { type Reducer } from '@reduxjs/toolkit'
import {
  type StoreWithReducerManager,
  type StateSchemaKeys,
  type StateSchema
} from '@/app/providers/StoreProvider'
import { useEffect, type FC, type ReactNode } from 'react'
import { useStore } from 'react-redux'
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch'

export type ReducersList = {
  [reducerName in StateSchemaKeys]?: Reducer<NonNullable<StateSchema[reducerName]>>;
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

    const mountedReducers = store.reducerManager?.getReducerMap()

    entries.forEach(([reducerName, reducer]) => {
      // add reducer only if store doesn't contain yet
      if (!mountedReducers[reducerName as StateSchemaKeys]) {
        store.reducerManager.add(reducerName as StateSchemaKeys, reducer)
        dispatch({ type: `@INIT ${reducerName} reducer` })
      }
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
