import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Avatar, Dropdown } from 'shared/ui'
import { useSelector } from 'react-redux'
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions
} from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks'
import { routePaths } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'

interface AvatarButtonProps {
  className?: string
}

const AvatarButton: FC<AvatarButtonProps> = memo((props) => {
  const { className } = props

  const { t } = useTranslation(['translation', 'profile'])
  const dispatch = useAppDispatch()

  const userAuthData = useSelector(getUserAuthData)
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

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
      trigger={<Avatar src={userAuthData.avatar} size={30} />}
      items={[
        ...(isAdminPanelAvailable
          ? [
              {
                content: 'Admin panel',
                href: routePaths.admin_panel
              }
            ]
          : []),
        {
          content: t('profile:profile'),
          href: routePaths.profile + userAuthData.id
        },
        { content: t('translation:sign_out'), onClick: onLogout }
      ]}
    />
  )
})

export default AvatarButton
