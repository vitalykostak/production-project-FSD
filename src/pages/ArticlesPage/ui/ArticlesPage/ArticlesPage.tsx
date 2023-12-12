import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticlesPage.module.scss'
import { ArticleList, ArticleListView } from 'entities/Articles'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = memo((props) => {
  const { className } = props

  const mods = {}

  const additionsClasses = [className]

  return (
    <div className={classNames(styles.ArticlesPage, mods, additionsClasses)}>
      <ArticleList view={ArticleListView.BIG} articles={[]} />
    </div>
  )
})

export default ArticlesPage
