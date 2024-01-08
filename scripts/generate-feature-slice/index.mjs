import { layers } from './constants/layers.mjs'
import { generateFeatureSlice } from './lib/generateFeatureSlice.mjs'

const layer = process.argv[2]
const slice = process.argv[3]

if (!layers.includes(layer)) {
    throw new Error(
        'Please input correct layer. Correct command example: node scripts/generate-feature-slice/index.ts entities EntityName',
    )
}

if (!slice) {
    throw new Error(
        "Slice argument can't be empty. Correct command example: node scripts/generate-feature-slice/index.ts entities EntityName",
    )
}

void generateFeatureSlice(layer, slice)
