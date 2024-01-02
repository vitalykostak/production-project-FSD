import { Menu } from '@headlessui/react'
import { memo, type FC, type ReactNode } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { type DirectionType } from '@/shared/types'

import popupStyles from '../../styles/Popup.module.scss'
import AppLink from '../../../AppLink/AppLink'

import styles from './Dropdown.module.scss'

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger?: ReactNode
  direction?: DirectionType
}

interface DropdownItem {
  disabled?: boolean
  content: ReactNode
  onClick?: () => void
  href?: string
}

const Dropdown: FC<DropdownProps> = memo((props) => {
  const { className, trigger, items, direction = 'bottomLeft' } = props

  const mods = {}

  const additionsClasses = [className]
  const itemsAdditionsClasses = [popupStyles[direction]]

  return (
    <Menu
      as="div"
      className={classNames(popupStyles.Popup, mods, additionsClasses)}
    >
      <Menu.Button className={styles.trigger}>{trigger}</Menu.Button>
      <Menu.Items
        as="ul"
        className={classNames(styles.items, {}, itemsAdditionsClasses)}
      >
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
          <li
            onClick={item.onClick}
            role="button"
            className={classNames(styles.item, {
              [styles.active]: active,
              [styles.disabled]: item.disabled
            })}
          >
            {item.content}
          </li>
          )

          if (item.href) {
            return (
              <Menu.Item key={index} as={AppLink} to={item.href} disabled={item.disabled} className={styles.link}>
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item key={index} as={'div'} disabled={item.disabled}>
               {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
})

export default Dropdown
