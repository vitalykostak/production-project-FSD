import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink as AppLinkDeprecated, AppLinkTheme } from '@/shared/ui/deprecated'
import { getUserAuthData } from '@/entities/User'
import { ToggleFeature } from '@/shared/lib/featureFlags'
import { AppLink, Icon } from '@/shared/ui/redesigned'

import { type SidebarItemType } from '../../model/types/sidebar'

import sidebarDeprecatedStyles from './SidebarItem.module.scss'
import sidebarStyles from './SidebarItemRedesigned.module.scss'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

const SidebarItem: FC<SidebarItemProps> = props => {
    const { item, collapsed } = props

    const { t } = useTranslation(['main', 'about', 'profile', 'article'])
    const isAuth = useSelector(getUserAuthData)

    if (!isAuth && item.authOnly) {
        return null
    }

    return (
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={
                <AppLinkDeprecated
                    className={classNames(sidebarDeprecatedStyles.item, {
                        [sidebarDeprecatedStyles.collapsed]: collapsed,
                    })}
                    to={item.path}
                    theme={AppLinkTheme.PRIMARY}
                >
                    <item.Icon className={sidebarDeprecatedStyles.icon} />
                    <span className={sidebarDeprecatedStyles.link}>{t(item.text)}</span>
                </AppLinkDeprecated>
            }
            onEnabled={
                <AppLink
                    className={classNames(sidebarStyles.item, {
                        [sidebarStyles.collapsed]: collapsed,
                    })}
                    to={item.path}
                    variant="primary"
                    classNameActive={sidebarStyles.itemActive}
                >
                    <Icon Svg={item.Icon} />
                    <span className={sidebarStyles.link}>{t(item.text)}</span>
                </AppLink>
            }
        />
    )
}

export default SidebarItem
