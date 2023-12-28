import { useCallback, type FC, useState, memo } from 'react'
import navbarStyles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  AppLink,
  Avatar,
  Button,
  ButtonTheme,
  Dropdown,
  HStack,
  Text,
  TextTheme
} from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions
} from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks'
import { routePaths } from 'shared/config/routeConfig/routeConfig'
import { NotificationButton } from 'features/notificationButton'

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const { t } = useTranslation(['translation', 'article', 'profile'])

  const dispatch = useAppDispatch()

  const userAuthData = useSelector(getUserAuthData)
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const [isAuthModal, setisAuthModal] = useState<boolean>(false)
  const onShowModal = useCallback(() => setisAuthModal(true), [])

  const onClose = useCallback(() => setisAuthModal(false), [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const isAdminPanelAvailable = isAdmin || isManager

  if (userAuthData) {
    return (
      <nav className={classNames(navbarStyles.Navbar, {}, [className])}>
        <Text
          text={t('translation:app_name')}
          theme={TextTheme.INVERTED}
          className={navbarStyles.appName}
        />
        <AppLink to={routePaths.article_create}>
          {t('article:create_article')}
        </AppLink>
        <HStack className={navbarStyles.actions} gap="16" align="center">
          <NotificationButton />
          <Dropdown
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
        </HStack>
      </nav>
    )
  }

  return (
    <header className={classNames(navbarStyles.Navbar, {}, [className])}>
      <div className={navbarStyles.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
          {t('translation:sign_in')}
        </Button>
        {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onClose} />}
      </div>
    </header>
  )
})

export default Navbar
