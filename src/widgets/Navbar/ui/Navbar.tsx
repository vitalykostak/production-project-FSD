import { useCallback, type FC, useState, memo } from 'react'
import navbarStyles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, Button, ButtonTheme, Text, TextTheme } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks'
import { routePaths } from 'shared/config/routeConfig/routeConfig'

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const { t } = useTranslation(['translation', 'article'])

  const dispatch = useAppDispatch()

  const userAuthData = useSelector(getUserAuthData)

  const [isAuthModal, setisAuthModal] = useState<boolean>(false)
  const onShowModal = useCallback(() => setisAuthModal(true), [])

  const onClose = useCallback(() => setisAuthModal(false), [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (userAuthData) {
    return (
      <nav className={classNames(navbarStyles.Navbar, {}, [className])}>
         <Text text={t('translation:app_name')} theme={TextTheme.INVERTED} className={navbarStyles.appName} />
          <AppLink to={routePaths.article_create}>
            {t('article:create_article')}
          </AppLink>
        <div className={navbarStyles.links}>

          <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
            {t('translation:sign_out')}
          </Button>
        </div>
      </nav>
    )
  }

  return (
    <nav className={classNames(navbarStyles.Navbar, {}, [className])}>
      <div className={navbarStyles.links}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
          {t('translation:sign_in')}
        </Button>
        {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onClose} />}
      </div>
    </nav>
  )
})

export default Navbar
