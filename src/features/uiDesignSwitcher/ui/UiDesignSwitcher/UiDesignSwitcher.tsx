import { memo, type FC, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ListBox, type ListBoxItem, VStack, Text, Card } from '@/shared/ui/redesigned'
import {
    ListBox as ListBoxDeprecated,
    Text as TextDeprecated,
    Card as CardDeprecated,
} from '@/shared/ui/deprecated'
import {
    ToggleFeature,
    getFeatureFlag,
    toggleFeature,
    updateUserFeatureFlags,
} from '@/shared/lib/featureFlags'
import { useAppDispatch } from '@/shared/lib/hooks'
import { UiInterfaceVersion } from '@/shared/types/ui'

interface UiDesignSwitcherProps {
    className?: string
}

const UiDesignSwitcher: FC<UiDesignSwitcherProps> = memo(props => {
    const { className } = props
    const { t } = useTranslation(['translation'])
    const dispatch = useAppDispatch()

    const isAppRedesigned = getFeatureFlag('isAppRedesigned')

    const items = useMemo<ListBoxItem[]>(
        () => [
            {
                value: UiInterfaceVersion.LATEST,
                content: t('translation:new'),
                disabled: isAppRedesigned,
            },
            {
                value: UiInterfaceVersion.DEPRECATED,
                content: t('translation:old'),
                disabled: !isAppRedesigned,
            },
        ],
        [t, isAppRedesigned],
    )

    const onChange = useCallback(
        (value: UiInterfaceVersion) => {
            console.info({ value })
            void dispatch(
                updateUserFeatureFlags({
                    isAppRedesigned: value === UiInterfaceVersion.LATEST,
                }),
            )
        },
        [dispatch],
    )

    const value = toggleFeature({
        featureFlag: 'isAppRedesigned',
        onEnabled: () => UiInterfaceVersion.LATEST,
        onDisabled: () => UiInterfaceVersion.DEPRECATED,
    })

    const mods = {}

    const additionsClasses = [className]

    return (
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onEnabled={
                <Card max>
                    <VStack gap="16" className={classNames('', mods, additionsClasses)}>
                        <Text text={t('translation:choose_ui_version')} />
                        <ListBox<UiInterfaceVersion>
                            items={items}
                            onChange={onChange}
                            value={value}
                        />
                    </VStack>
                </Card>
            }
            onDisabled={
                <CardDeprecated max>
                    <VStack gap="16" className={classNames('', mods, additionsClasses)}>
                        <TextDeprecated text={t('translation:choose_ui_version')} />
                        <ListBoxDeprecated<UiInterfaceVersion>
                            items={items}
                            onChange={onChange}
                            value={value}
                        />
                    </VStack>
                </CardDeprecated>
            }
        />
    )
})

export default UiDesignSwitcher
