import { type FC, useState } from 'react'
import sidebarStyles from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames'
import { ThemeSwitcher, LanguageSwitcher } from 'shared/ui'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation()

  const [collapsed, setCollapsed] = useState<boolean>(false)

  const toggleSidebar = () => setCollapsed((prev) => !prev)

  return (
    <div
      className={classNames(
        sidebarStyles.Sidebar,
        { [sidebarStyles.collapsed]: collapsed },
        [className]
      )}
    >
      <button onClick={toggleSidebar}>{t('toggle')}</button>
      <div className={sidebarStyles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher
          className={classNames(sidebarStyles.languageSwitcherContainer)}
        />
      </div>
    </div>
  )
}

export default Sidebar
