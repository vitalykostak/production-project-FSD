import * as fs from 'fs'
import path from 'path'

const babelLoaderCacheDirectoryPath = path.resolve('node_modules', '.cache', 'babel-loader')

void fs.promises.rm(babelLoaderCacheDirectoryPath, { recursive: true, force: true })
