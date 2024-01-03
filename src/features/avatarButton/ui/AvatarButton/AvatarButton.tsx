import { memo, type FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Avatar, Dropdown } from '@/shared/ui'
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  useUserActions
} from '@/entities/User'
import { getAdminPanelRoute, getProfileRoute } from '@/shared/consts/router'

interface AvatarButtonProps {
  className?: string
  invertedAvatarErrorFallbackColor?: boolean
}

const AvatarButton: FC<AvatarButtonProps> = memo((props) => {
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

  return (
    <Dropdown
      className={classNames('', mods, additionsClasses)}
      direction="bottomLeft"
      trigger={
        <Avatar
          src={userAuthData.avatar}
          size={30}
          invertedErrorFallbackColor={invertedAvatarErrorFallbackColor}
        />
      }
      items={[
        ...(isAdminPanelAvailable
          ? [
              {
                content: 'Admin panel',
                href: getAdminPanelRoute()
              }
            ]
          : []),
        {
          content: t('profile:profile'),
          href: getProfileRoute(userAuthData.id)
        },
        { content: t('translation:sign_out'), onClick: onLogout }
      ]}
    />
  )
})

export default AvatarButton
