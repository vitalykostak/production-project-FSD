import { memo, type FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Dropdown as DropdownDeprecated, Avatar as AvatarDeprecated } from '@/shared/ui/deprecated'
import { getUserAuthData, isUserAdmin, isUserManager, useUserActions } from '@/entities/User'
import { getAdminPanelRoute, getProfileRoute, getSettingsRoute } from '@/shared/consts/router'
import { ToggleFeature } from '@/shared/lib/featureFlags'
import { Avatar, Dropdown } from '@/shared/ui/redesigned'

interface AvatarButtonProps {
    className?: string
    invertedAvatarErrorFallbackColor?: boolean
}

const AvatarButton: FC<AvatarButtonProps> = memo(props => {
    const { className, invertedAvatarErrorFallbackColor } = props

    const { t } = useTranslation(['translation', 'profile'])
    const { logout } = useUserActions()

    const userAuthData = useSelector(getUserAuthData)
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)

    const onLogout = useCallback(() => {
        logout()
    }, [logout])

    const isAdminPanelAvailable = isAdmin || isManager

    const mods = {}

    const additionsClasses = [className]

    if (!userAuthData) {
        return null
    }

    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: 'Admin panel',
                      href: getAdminPanelRoute(),
                  },
              ]
            : []),
        {
            content: t('profile:profile'),
            href: getProfileRoute(userAuthData.id),
        },
        {
            content: t('translation:settings'),
            href: getSettingsRoute(),
        },
        { content: t('translation:sign_out'), onClick: onLogout },
    ]

    return (
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={
                <DropdownDeprecated
                    className={classNames('', mods, additionsClasses)}
                    direction="bottomLeft"
                    trigger={
                        <AvatarDeprecated
                            src={userAuthData.avatar}
                            size={30}
                            invertedErrorFallbackColor={invertedAvatarErrorFallbackColor}
                        />
                    }
                    items={items}
                />
            }
            onEnabled={
                <Dropdown
                    className={classNames('', mods, additionsClasses)}
                    direction="bottomLeft"
                    trigger={<Avatar src={userAuthData.avatar} size={40} />}
                    items={items}
                />
            }
        />
    )
})

export default AvatarButton
