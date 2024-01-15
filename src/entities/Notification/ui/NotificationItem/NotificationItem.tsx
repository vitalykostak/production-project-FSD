import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import {
    AppLink as AppLinkDeprecated,
    Card as CardDeprecated,
    Text as TextDeprecated,
} from '@/shared/ui/deprecated'
import { CardTheme } from '@/shared/ui/deprecated/Card/Card'
import { ToggleFeature } from '@/shared/lib/featureFlags'
import { AppLink, Card, Text } from '@/shared/ui/redesigned'

import { type Notification } from '../../types/notification'

import styles from './NotificationItem.module.scss'

interface NotificationItemProps {
    className?: string
    item: Notification
}

const NotificationItem: FC<NotificationItemProps> = memo(props => {
    const { className, item } = props

    const mods = {}

    const additionsClasses = [className]

    const content = (
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={
                <CardDeprecated
                    theme={CardTheme.OUTLINE}
                    className={classNames(styles.NotificationItem, mods, additionsClasses)}
                >
                    <TextDeprecated title={item.title} text={item.description} />
                </CardDeprecated>
            }
            onEnabled={
                <Card
                    variant="outline"
                    className={classNames(styles.NotificationItem, mods, additionsClasses)}
                >
                    <Text title={item.title} text={item.description} />
                </Card>
            }
        />
    )

    if (item.href) {
        return (
            <ToggleFeature
                featureFlag="isAppRedesigned"
                onDisabled={
                    <AppLinkDeprecated
                        to={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.link}
                    >
                        {content}
                    </AppLinkDeprecated>
                }
                onEnabled={
                    <AppLink
                        to={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.link}
                    >
                        {content}
                    </AppLink>
                }
            />
        )
    }

    return content
})

export default NotificationItem
