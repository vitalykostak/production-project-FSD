import { getSliceName } from '../utils/getSliceName.mjs'
import { getSliceSchemaName } from '../utils/getSliceSchemaName.mjs'

export const getSliceTemplate =
    sliceName => `import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { type ${getSliceSchemaName(sliceName)} } from '../../types/${getSliceSchemaName(sliceName)}'

const initialState: ${getSliceSchemaName(sliceName)} = {
  ids: [],
  entities: {}
}

const ${getSliceName(sliceName)}Adapter = createEntityAdapter({})

export const ${getSliceName(sliceName)} = createSlice({
  name: '${getSliceName(sliceName)}',
  initialState: ${getSliceName(sliceName)}Adapter.getInitialState(initialState),
  reducers: {}
})

// Action creators are generated for each case reducer function
export const ${getSliceName(sliceName)}Actions = ${getSliceName(sliceName)}.actions
export const ${getSliceName(sliceName)}Reducer = ${getSliceName(sliceName)}.reducer

`
