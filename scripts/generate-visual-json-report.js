/* eslint-disable @typescript-eslint/no-var-requires */
const { promisify } = require('util')
const { readdir, writeFile } = require('fs')
const path = require('path')

const asyncReaddir = promisify(readdir)
const writeFileAsync = promisify(writeFile)

const lokiDir = path.join(__dirname, '..', '.loki')
const actualDir = path.join(lokiDir, 'current')
const expectedDir = path.join(lokiDir, 'reference')
const diffDir = path.join(lokiDir, 'difference')

;(async function main() {
    const diffs = await asyncReaddir(diffDir)

    await writeFileAsync(
        path.join(lokiDir, 'report.json'),
        JSON.stringify({
            newItems: [],
            deletedItems: [],
            passedItems: [],
            failedItems: diffs,
            expectedItems: diffs,
            actualItems: diffs,
            diffItems: diffs,
            actualDir: path.relative(lokiDir, actualDir),
            expectedDir: path.relative(lokiDir, expectedDir),
            diffDir: path.relative(lokiDir, diffDir),
        }),
    )
})()
