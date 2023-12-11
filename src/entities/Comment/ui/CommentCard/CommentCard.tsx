import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './CommentCard.module.scss'
import { type Comment } from '../../model/types/comment'
import { AppLink, Avatar, Skeleton, Text } from 'shared/ui'
import { routePaths } from 'shared/config/routeConfig/routeConfig'

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

const CommentCard: FC<CommentCardProps> = memo((props) => {
  const { className, comment, isLoading } = props

  const mods = {
    [styles.loading]: isLoading
  }

  const additionsClasses = [className]

  if (isLoading) {
    return (
      <div className={classNames(styles.CommentCard, mods, additionsClasses)}>
        <div className={styles.header}>
         <Skeleton width='30px' height='30px' borderRadius='50%'/>
         <Skeleton width='100px' height='16px' className={styles.username}/>
        </div>
        <Skeleton width='100%' height='50px' className={styles.text}/>
      </div>
    )
  }

  if (!comment) {
    return null
  }

  return (
    <div className={classNames(styles.CommentCard, mods, additionsClasses)}>
      <AppLink to={routePaths.profile + comment.user?.id} className={styles.header}>
       {comment.user?.avatar && <Avatar size={30} src={comment.user?.avatar}/>}
        <Text title={comment.user?.username} className={styles.username}/>
      </AppLink>
      <Text text={comment.text} className={styles.text}/>
    </div>
  )
})

export default CommentCard