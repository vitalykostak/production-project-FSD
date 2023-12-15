import { memo, type FC, type HTMLAttributeAnchorTarget } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleList.module.scss'
import { ArticleListView, type Article } from '../../model/types/articles'
import ArticleListItem from '../ArticleListItem/ArticleListItem'
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton'

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
