import { memo, type FC } from 'react'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleList } from '@/entities/Articles'

import { getArticlesPageSelectors } from '../../model/slices/articlesSlice/articlesPageSlice'
import {
  getArticlesPageLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors/articlesPageSelectors'

interface ArticleInfiniteListProps {
  className?: string
}

const ArticleInfiniteList: FC<ArticleInfiniteListProps> = memo((props) => {
  const { className } = props

  const articles = useSelector(getArticlesPageSelectors.selectAll)
  const view = useSelector(getArticlesPageView)
  const isLoading = useSelector(getArticlesPageLoading)

  const mods = {}

  const additionsClasses = [className]

  return (
    <div>
      <ArticleList
        view={view}
        articles={articles}
        isLoading={isLoading}
        className={classNames('', mods, additionsClasses)}
      />
    </div>
  )
})

export default ArticleInfiniteList
