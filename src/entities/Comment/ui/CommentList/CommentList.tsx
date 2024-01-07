import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { type TestProps } from '@/shared/types'

import CommentCard from '../CommentCard/CommentCard'
import { type Comment } from '../../model/types/comment'

import styles from './CommentList.module.scss'

export interface CommentListProps extends TestProps {
  className?: string
  comments: Comment[]
  isLoading?: boolean
}

const CommentList: FC<CommentListProps> = memo((props) => {
  const { className, comments, isLoading, 'data-testid': dataTestId } = props

  const { t } = useTranslation()

  const mods = {}

  const additionsClasses = [className]

  if (isLoading) {
    return (
      <div className={classNames(styles.CommentList, mods, additionsClasses)}>
        <CommentCard className={styles.comment} isLoading />
        <CommentCard className={styles.comment} isLoading />
        <CommentCard className={styles.comment} isLoading />
      </div>
    )
  }

  return (
    <div
      className={classNames(styles.CommentList, mods, additionsClasses)}
      data-testid={dataTestId}
    >
      {comments?.length
        ? comments.map((comment) => (
            <CommentCard
            data-testid={dataTestId}
              className={styles.comment}
              key={comment.id}
              comment={comment}
              isLoading={isLoading}
            />
        ))
        : t('comments_do_not_exist')}
    </div>
  )
})

export default CommentList
