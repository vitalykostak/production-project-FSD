import { lowerFirstLetter } from '../helpers/lowerFirstLetter.mjs'

export const getSliceName = sliceName => lowerFirstLetter(sliceName) + 'Slice'
