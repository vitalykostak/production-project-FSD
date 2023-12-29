import { memo, type FC, useState, useCallback, Fragment } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NotificationButton.module.scss'
import { Popover, Icon, Drawer, Button, ButtonTheme } from 'shared/ui'
import NotificationIcon from 'shared/assets/icons/notification.svg'
import { NotificationList } from 'entities/Notification'
import { BrowserView, MobileView } from 'react-device-detect'
import { AnimationProvider } from 'shared/lib/components/AnimationProvider'

interface NotificationButtonProps {
  className?: string
}

const NotificationButton: FC<NotificationButtonProps> = memo((props) => {
  const { className } = props

  const [isDrawerOpen, setDrawer] = useState(false)

  const showDrawer = useCallback(() => setDrawer(true), [])
  const hideDrawer = useCallback(() => setDrawer(false), [])

  const trigger = (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={showDrawer}
      className={styles.trigger}
    >
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  )

  const mods = {}

  const additionsClasses = [className]

  return (
    <>
      <BrowserView>
        <Popover
          direction="bottomLeft"
          trigger={trigger}
          className={classNames('', mods, additionsClasses)}
        >
          <NotificationList className={styles.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <AnimationProvider>
          <Drawer isOpen={isDrawerOpen} onClose={hideDrawer}>
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </>
  )
})

export default NotificationButton
