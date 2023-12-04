import { type FC } from 'react'
import sidebarStyles from './SidebarItem.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  AppLink,
  AppLinkTheme
} from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { type SidebarItemType } from '../../model/items'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

const SidebarItem: FC<SidebarItemProps> = (props) => {
  const { item, collapsed } = props

  const { t } = useTranslation(['main', 'about', 'profile'])

  return (

        <AppLink
          className={classNames(sidebarStyles.item, { [sidebarStyles.collapsed]: collapsed })}
          to={item.path}
          theme={AppLinkTheme.PRIMARY}
        >
          <item.Icon className={sidebarStyles.icon} />
          <span className={sidebarStyles.link}>{t(item.text)}</span>
        </AppLink>

  )
}

export default SidebarItem
