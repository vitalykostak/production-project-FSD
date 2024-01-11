import { memo, type FC, useState, useCallback } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Popover, Icon, Drawer, Button, ButtonTheme } from '@/shared/ui/deprecated'
import NotificationIcon from '@/shared/assets/icons/notification.svg'
import { NotificationList } from '@/entities/Notification'

import styles from './NotificationButton.module.scss'

interface NotificationButtonProps {
    className?: string
}

const NotificationButton: FC<NotificationButtonProps> = memo(props => {
    const { className } = props

    const [isDrawerOpen, setDrawer] = useState(false)

    const showDrawer = useCallback(() => setDrawer(true), [])
    const hideDrawer = useCallback(() => setDrawer(false), [])

    const trigger = (
        <Button theme={ButtonTheme.CLEAR} onClick={showDrawer} className={styles.trigger}>
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
                <Drawer isOpen={isDrawerOpen} onClose={hideDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    )
})

export default NotificationButton
