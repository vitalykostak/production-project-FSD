import { memo, type FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Tabs as TabsDeprecated } from '@/shared/ui/deprecated'
import { ToggleFeature } from '@/shared/lib/featureFlags'
import { type TabItem, Tabs } from '@/shared/ui/redesigned'

import { ArticleType } from '../../model/consts/consts'

interface ArticleTypeTabsProps {
    className?: string
    type: ArticleType
    onChangeType: (tab: TabItem) => void
}

const ArticleTypeTabs: FC<ArticleTypeTabsProps> = memo(props => {
    const { className, type, onChangeType } = props
    const { t } = useTranslation(['article'])

    const tabs = useMemo(
        () =>
            Object.values<ArticleType>(ArticleType).map(type => ({
                value: type,
                content: t(`article:articles_types.${type}`),
            })),
        [t],
    )

    const mods = {}

    const additionsClasses = [className]

    return (
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={
                <TabsDeprecated
                    tabs={tabs}
                    value={type}
                    onTabClick={onChangeType}
                    className={classNames('', mods, additionsClasses)}
                />
            }
            onEnabled={
                <Tabs
                    direction="column"
                    tabs={tabs}
                    value={type}
                    onTabClick={onChangeType}
                    className={classNames('', mods, additionsClasses)}
                />
            }
        />
    )
})

export default ArticleTypeTabs
