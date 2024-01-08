import { getSliceSchemaName } from '../utils/getSliceSchemaName.mjs'

export const getSliceSchemaTemplate =
    sliceName => `import { type EntityState } from '@reduxjs/toolkit'

export interface ${getSliceSchemaName(sliceName)} extends EntityState {
 
}
`
