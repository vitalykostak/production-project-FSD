import { memo, type FC, useState, useCallback } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'

import { classNames } from '@/shared/lib/classNames/classNames'
import {
    Popover as PopoverDeprecated,
    Icon as IconDeprecated,
    Drawer,
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated'
import NotificationIconDeprecated from '@/shared/assets/icons/notification.svg'
import NotificationIcon from '@/shared/assets/icons/notificationNew.svg'
import { NotificationList } from '@/entities/Notification'
import { ToggleFeature } from '@/shared/lib/featureFlags'
import { Icon, Popover } from '@/shared/ui/redesigned'

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
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    onClick={showDrawer}
                    className={styles.trigger}
                >
                    <IconDeprecated Svg={NotificationIconDeprecated} inverted />
                </ButtonDeprecated>
            }
            onEnabled={
                <Icon
                    Svg={NotificationIcon}
                    width={32}
                    height={32}
                    clickable
                    onClick={showDrawer}
                />
            }
        />
    )

    const mods = {}

    const additionsClasses = [className]

    return (
        <>
            <BrowserView>
                <ToggleFeature
                    featureFlag="isAppRedesigned"
                    onDisabled={
                        <PopoverDeprecated
                            direction="bottomLeft"
                            trigger={trigger}
                            className={classNames('', mods, additionsClasses)}
                        >
                            <NotificationList className={styles.notifications} />
                        </PopoverDeprecated>
                    }
                    onEnabled={
                        <Popover
                            direction="bottomLeft"
                            trigger={trigger}
                            className={classNames('', mods, additionsClasses)}
                        >
                            <NotificationList className={styles.notifications} />
                        </Popover>
                    }
                />
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
