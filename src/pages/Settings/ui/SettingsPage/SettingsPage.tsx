import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'
import { Text as TextRedesigned, VStack } from '@/shared/ui/redesigned'
import { Text as TextDeprecated } from '@/shared/ui/deprecated'
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher'
import { ToggleFeature } from '@/shared/lib/featureFlags'

import styles from './SettingsPage.module.scss'

interface SettingsPageProps {
    className?: string
}

const SettingsPage: FC<SettingsPageProps> = memo(props => {
    const { className } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <Page className={classNames(styles.SettingsPage, mods, additionsClasses)}>
            <VStack gap="24">
                <ToggleFeature
                    featureFlag="isAppRedesigned"
                    onEnabled={<TextRedesigned title="Settings Page" />}
                    onDisabled={<TextDeprecated title="Settings Page" />}
                />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    )
})

export default SettingsPage
