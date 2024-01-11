import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, Card, Text } from '@/shared/ui/deprecated'
import { CardTheme } from '@/shared/ui/deprecated/Card/Card'

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
        <Card
            theme={CardTheme.OUTLINE}
            className={classNames(styles.NotificationItem, mods, additionsClasses)}
        >
            <Text title={item.title} text={item.description} />
        </Card>
    )

    if (item.href) {
        return (
            <AppLink to={item.href} target="_blank" rel="noreferrer" className={styles.link}>
                {content}
            </AppLink>
        )
    }

    return content
})

export default NotificationItem
