import * as fs from 'fs'
import { rootDirectory } from '../rootDirectory.mjs'
import path from 'path'

export const generateFoldersStructure = async (layer, slice) => {
    const slicePath = path.resolve(rootDirectory, 'src', layer, slice)
    const modelPath = path.resolve(rootDirectory, 'src', layer, slice, 'model')
    const uiPath = path.resolve(rootDirectory, 'src', layer, slice, 'ui')
    const indexFilePath = path.resolve(rootDirectory, 'src', layer, slice, 'index.ts')

    try {
        await fs.promises.mkdir(slicePath)
        await fs.promises.mkdir(modelPath)
        await fs.promises.mkdir(uiPath)
        await fs.promises.appendFile(indexFilePath, '')
    } catch (error) {
        throw new Error(error)
    }
}
