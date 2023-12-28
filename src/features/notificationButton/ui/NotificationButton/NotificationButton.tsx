import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NotificationButton.module.scss'
import { Popover, Icon } from 'shared/ui'
import NotificationIcon from 'shared/assets/icons/notification.svg'
import { NotificationList } from 'entities/Notification'

interface NotificationButtonProps {
  className?: string
}

const NotificationButton: FC<NotificationButtonProps> = memo((props) => {
  const { className } = props

  const mods = {}

  const additionsClasses = [className]

  return (
    <Popover
      direction="bottomLeft"
      trigger={<Icon Svg={NotificationIcon} inverted />}
      className={classNames('', mods, additionsClasses)}
    >
      <NotificationList className={styles.notifications} />
    </Popover>
  )
})

export default NotificationButton
