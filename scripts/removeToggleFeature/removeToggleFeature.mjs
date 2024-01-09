import { Project, SyntaxKind } from 'ts-morph'

const removeFeatureFlag = process.argv[2] // isArticleEnabled
const featureFlagState = process.argv[3] // enable/disable

if (!removeFeatureFlag) {
    throw new Error('Need to pass featureFlag')
}

if (!featureFlagState) {
    throw new Error('Need to pass featureFlagState')
}

const ENABLE_STATE = 'enable'
const DISABLE_STATE = 'disable'

if (![ENABLE_STATE, DISABLE_STATE].includes(featureFlagState)) {
    throw new Error(`featureFlagState should be "${ENABLE_STATE}" or "${DISABLE_STATE}"`)
}

const project = new Project()

project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx'])

const sourceFiles = project.getSourceFiles()

const TARGET_FUNCTION = 'toggleFeature'

const isToggleFunction = node => {
    let flag = false

    node.forEachChild(child => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === TARGET_FUNCTION) {
            flag = true
        }
    })

    return flag
}

sourceFiles.forEach(file => {
    file.forEachDescendant(node => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const funcOptions = node.getFirstChildByKind(SyntaxKind.ObjectLiteralExpression)
            if (!funcOptions) {
                return
            }
            const featureFlagOption = funcOptions.getProperty('featureFlag')
            const onEnabledOption = funcOptions.getProperty('onEnabled')
            const onDisabledOption = funcOptions.getProperty('onDisabled')

            const featureFlag = featureFlagOption
                .getFirstChildByKind(SyntaxKind.StringLiteral)
                ?.getText()
                ?.slice(1, -1)
            const onEnabled = onEnabledOption.getFirstChildByKind(SyntaxKind.ArrowFunction)
            const onDisabled = onDisabledOption.getFirstChildByKind(SyntaxKind.ArrowFunction)

            if (removeFeatureFlag !== featureFlag) {
                return
            }

            if (featureFlagState === ENABLE_STATE) {
                node.replaceWithText(onEnabled?.getBody?.()?.getText?.())
                console.info(`"${featureFlag}" has been enabled`)
            }
            if (featureFlagState === DISABLE_STATE) {
                node.replaceWithText(onDisabled?.getBody?.()?.getText?.())
                console.info(`"${featureFlag}" has been disabled`)
            }
        }
    })
})

void project.save()
