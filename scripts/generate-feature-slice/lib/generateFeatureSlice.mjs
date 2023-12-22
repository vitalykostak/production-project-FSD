import { generateModel } from './generateModel.mjs'
import * as fs from 'fs'
import { rootDirectory } from '../rootDirectory.mjs'
import path from 'path'

export const generateFeatureSlice = async (layer, slice) => {
  const slicePath = path.resolve(rootDirectory, 'src', layer, slice)
  await fs.promises.mkdir(slicePath)

  await generateModel(layer, slice)
}
