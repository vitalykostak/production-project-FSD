import { Project } from 'ts-morph'

const isAbsoluteImport = value => {
    const layers = ['entities', 'features', 'pages', 'app', 'widgets', 'shared']

    return layers.some(layer => value.startsWith(layer))
}

const project = new Project()

project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx'])

const sourceFiles = project.getSourceFiles()

sourceFiles.forEach(file => {
    const importDeclarations = file.getImportDeclarations()

    importDeclarations.forEach(declaration => {
        const importValue = declaration.getModuleSpecifierValue()
        if (isAbsoluteImport(importValue)) {
            declaration.setModuleSpecifier('@/' + importValue)
        }
    })
})

void project.save()
