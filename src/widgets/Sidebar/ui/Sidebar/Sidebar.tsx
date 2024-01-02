import { type FC, useState, memo } from 'react'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames/classNames'
import {
  Button,
  ButtonTheme,
  VStack
} from '@/shared/ui'
import { ButtonSize } from '@/shared/ui/Button/Button'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LanguageSwitcher } from '@/features/LanguageSwitcher'

import SidebarItem from '../SidebarItem/SidebarItem'
import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems'

import sidebarStyles from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const SidebarItems = useSelector(getSidebarItems)

  const toggleSidebar = () => setCollapsed((prev) => !prev)

  return (
    <aside
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
      <VStack role='navigation' gap={'8'} className={sidebarStyles.items}>
        {SidebarItems.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </VStack>
      <div className={sidebarStyles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher
          className={classNames(sidebarStyles.languageSwitcherContainer)}
          short={collapsed}
        />
      </div>
    </aside>
  )
})

export default Sidebar
