import { capitalizeFirstLetter } from '../helpers/capitalizeFirstLetter.mjs'

export const getSliceSchemaName = sliceName => capitalizeFirstLetter(sliceName) + 'Schema'
