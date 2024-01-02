import { memo, type FC, type HTMLAttributeAnchorTarget } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import { type Article } from '../../model/types/articles'
import ArticleListItem from '../ArticleListItem/ArticleListItem'
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton'
import { ArticleListView } from '../../model/consts/consts'

import styles from './ArticleList.module.scss'
// import { Virtuoso } from 'react-virtuoso'
// import { wrapperId } from 'widgets/Page/ui/Page/Page'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleListView
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleListView) =>
  new Array(view === ArticleListView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkeleton
        key={index}
        view={view}
        className={styles.card}
      />
    ))

const ArticleList: FC<ArticleListProps> = memo((props) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleListView.SMALL,
    target
  } = props

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      key={article.id}
      view={view}
      className={styles.card}
      target={target}
    />
  )

  const mods = {}

  const additionsClasses = [className, styles[view]]

  // return (
  //   <Virtuoso<Article>
  //   className={classNames('', mods, additionsClasses)}
  //     data={articles}
  //     itemContent={(_, article, context) => {
  //       console.log({ context })
  //       return renderArticle(article)
  //     }}

  //     customScrollParent={document.getElementById(wrapperId) as HTMLElement}
  //   />
  // )

  return (
    <div className={classNames('', mods, additionsClasses)}>
      {articles.length
        ? articles.map((article) => renderArticle(article))
        : null}
      {isLoading && (
        <div className={classNames('', mods, additionsClasses)}>
          {getSkeletons(view)}
        </div>
      )}
    </div>
  )
})

export default ArticleList
