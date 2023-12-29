import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './NotificationList.module.scss'
import { useGetNotificationListQuery } from '../../api/notificationApi/notificationApi'
import NotificationItem from '../NotificationItem/NotificationItem'
import { Skeleton, VStack } from '@/shared/ui'

interface NotificationListProps {
  className?: string
}

const NotificationList: FC<NotificationListProps> = memo((props) => {
  const { className } = props

  const {
    data: notifications,
    isLoading,
    error
  } = useGetNotificationListQuery(undefined, { pollingInterval: 5000 })

  if (error) {
    return String(error)
  }

  const mods = {}

  const additionsClasses = [className]

  if (isLoading) {
    return (
      <VStack
        gap="16"
        className={classNames(styles.NotificationList, mods, additionsClasses)}
      >
        <Skeleton width="100%" height="200x" borderRadius="8px" />
        <Skeleton width="100%" height="200x" borderRadius="8px" />
        <Skeleton width="100%" height="200x" borderRadius="8px" />
      </VStack>
    )
  }

  return (
    <VStack
      gap="16"
      className={classNames(styles.NotificationList, mods, additionsClasses)}
    >
      {notifications?.map((notification) => (
        <NotificationItem key={notification.id} item={notification} />
      ))}
    </VStack>
  )
})

export default NotificationList
