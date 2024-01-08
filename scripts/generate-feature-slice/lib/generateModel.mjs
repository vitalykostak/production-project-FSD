import * as fs from 'fs'
import { rootDirectory } from '../rootDirectory.mjs'
import path from 'path'
import { getSliceName } from '../utils/getSliceName.mjs'
import { getSliceSchemaName } from '../utils/getSliceSchemaName.mjs'
import { getSliceTemplate } from '../templates/getSliceTemplate.mjs'
import { getSliceSchemaTemplate } from '../templates/getSliceSchemaTemplate.mjs'

export const generateModel = async (layer, slice) => {
    const modelPath = path.resolve(rootDirectory, 'src', layer, slice, 'model')
    const selectorsPath = path.resolve(modelPath, 'selectors')
    const typesPath = path.resolve(modelPath, 'types')
    const slicesPath = path.resolve(modelPath, 'slices')
    const slicePath = path.resolve(slicesPath, getSliceName(slice))
    const sliceFilePath = path.resolve(slicePath, getSliceName(slice) + '.ts')
    const sliceSchemaFilePath = path.resolve(typesPath, getSliceSchemaName(slice) + '.ts')

    try {
        await fs.promises.mkdir(modelPath)
        await fs.promises.mkdir(selectorsPath)
        await fs.promises.mkdir(typesPath)
        await fs.promises.mkdir(slicesPath)
        await fs.promises.mkdir(slicePath)
        await fs.promises.appendFile(sliceSchemaFilePath, getSliceSchemaTemplate(slice))
        await fs.promises.appendFile(sliceFilePath, getSliceTemplate(slice))
    } catch (error) {
        throw new Error(error)
    }
}
