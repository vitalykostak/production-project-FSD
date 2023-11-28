import { type FC, useState } from 'react'
import sidebarStyles from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  ThemeSwitcher,
  LanguageSwitcher,
  Button,
  ButtonTheme,
  AppLink,
  AppLinkTheme
} from 'shared/ui'
import { ButtonSize } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { routePaths } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

interface SidebarProps {
  className?: string
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation(['main', 'about'])

  const [collapsed, setCollapsed] = useState<boolean>(false)
  const toggleSidebar = () => setCollapsed((prev) => !prev)

  return (
    <div
      data-testid={'sidebar'}
      className={classNames(
        sidebarStyles.Sidebar,
        {
          [sidebarStyles.collapsed]: collapsed
        },
        [className]
      )}
    >
      <Button
        onClick={toggleSidebar}
        data-testid="toggle-button"
        className={sidebarStyles.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={sidebarStyles.items}>
        <AppLink
          className={sidebarStyles.item}
          to={routePaths.main}
          theme={AppLinkTheme.PRIMARY}
        >
          <MainIcon className={sidebarStyles.icon} />
          <span className={sidebarStyles.link}>{t('main:main')}</span>
        </AppLink>
        <AppLink
          className={sidebarStyles.item}
          to={routePaths.about}
          theme={AppLinkTheme.PRIMARY}
        >
          <AboutIcon className={sidebarStyles.icon} />
          <span className={sidebarStyles.link}>{t('about:about')}</span>
        </AppLink>
      </div>
      <div className={sidebarStyles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher
          className={classNames(sidebarStyles.languageSwitcherContainer)}
          short={collapsed}
        />
      </div>
    </div>
  )
}

export default Sidebar
