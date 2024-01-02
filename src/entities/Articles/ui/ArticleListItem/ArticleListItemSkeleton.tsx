import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Card, Skeleton } from '@/shared/ui'

import { ArticleListView } from '../../model/consts/consts'

import styles from './ArticleListItem.module.scss'

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleListView
}

const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo((props) => {
  const { className, view = ArticleListView.SMALL } = props

  const mods = {}

  const additionsClasses = [className]

  if (view === ArticleListView.BIG) {
    return (
      <div
        className={classNames('', mods, [
          ...additionsClasses,
          styles[view]
        ])}
      >
        <Card>
          <div className={styles.header}>
            <Skeleton
              width='30px'
              height='30px'
              borderRadius='50%'
              className={styles.avatar}
            />
            <Skeleton width='150px' height='16px' className={styles.username} />
            <Skeleton width='150px' height='16px' className={styles.articleData} />
          </div>
          <Skeleton width='250px' height='24px' className={styles.title} />
          <Skeleton height='200px' className={styles.img} />
          <div className={styles.footer}>
            <Skeleton width='200px' height='36px'/>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div
      className={classNames('', mods, [
        ...additionsClasses,
        styles[view]
      ])}
    >
      <Card >
        <div className={styles.imageWrapper}>
          <Skeleton width='200px' height='200px' className={styles.img} />
        </div>
        <div className={styles.infoWrapper}>
          <Skeleton width='130px' height='16px'/>
        </div>
        <Skeleton width='150px' height='16px' className={styles.title} />
      </Card>
    </div>
  )
})

export default ArticleListItemSkeleton
