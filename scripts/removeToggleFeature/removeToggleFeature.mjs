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
const TARGET_FUNCTION_COMPONENT = 'ToggleFeature'

const isToggleFunctionComponent = node => {
    let flag = false

    node.forEachChild(child => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === TARGET_FUNCTION_COMPONENT) {
            flag = true
        }
    })

    return flag
}
const isToggleFunction = node => {
    let flag = false

    node.forEachChild(child => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === TARGET_FUNCTION) {
            flag = true
        }
    })

    return flag
}

const replaceToggleFunction = node => {
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

const removeBracketsIfExist = text => {
    if (text.startsWith('(')) {
        return text?.slice(1, -1)
    }
    return text
}

const replaceToggleFunctionComponent = node => {
    const funcOptions = node.getAttributes()
    if (!funcOptions) {
        return
    }
    const featureFlag = node
        .getAttribute('featureFlag')
        .getFirstChildByKind(SyntaxKind.StringLiteral)
        .getText()
        ?.slice(1, -1)

    if (featureFlag !== removeFeatureFlag) {
        return
    }

    const onEnabled = node
        .getAttribute('onEnabled')
        .getFirstChildByKind(SyntaxKind.JsxExpression)
        .getExpression()
        ?.getText()

    const onDisabled = node
        .getAttribute('onDisabled')
        .getFirstChildByKind(SyntaxKind.JsxExpression)
        .getExpression()
        ?.getText()

    if (featureFlagState === ENABLE_STATE) {
        node.replaceWithText(removeBracketsIfExist(onEnabled))
        console.info(`"${featureFlag}" has been enabled`)
    }

    if (featureFlagState === DISABLE_STATE) {
        node.replaceWithText(removeBracketsIfExist(onDisabled))
        console.info(`"${featureFlag}" has been disabled`)
    }
}

sourceFiles.forEach(file => {
    file.forEachDescendant(node => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            replaceToggleFunction(node)
            return
        }

        if (node.isKind(SyntaxKind.JsxSelfClosingElement) && isToggleFunctionComponent(node)) {
            replaceToggleFunctionComponent(node)
        }
    })
})

void project.save()
