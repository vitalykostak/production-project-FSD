import * as fs from 'fs'
import path from 'path'

import { rootDirectory } from '../rootDirectory.mjs'

import { generateModel } from './generateModel.mjs'

export const generateFeatureSlice = async (layer, slice) => {
    const slicePath = path.resolve(rootDirectory, 'src', layer, slice)
    await fs.promises.mkdir(slicePath)

    await generateModel(layer, slice)
}
