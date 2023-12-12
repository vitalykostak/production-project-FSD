import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticlesPage.module.scss'
import {
  ArticleList,
  type ArticleListView,
  ToggleItemsView
} from 'entities/Articles'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib'
import {
  articlesPageActions,
  articlesPageReducer,
  getArticlesPageSelectors
} from '../../model/slices/articlesSlice/articlesPageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useSelector } from 'react-redux'
import {
  // getArticlesPageError,
  getArticlesPageLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors/articlesPageSelectors'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage: FC<ArticlesPageProps> = memo((props) => {
  const { className } = props

  const dispatch = useAppDispatch()

  const articles = useSelector(getArticlesPageSelectors.selectAll)
  const view = useSelector(getArticlesPageView)
  const isLoading = useSelector(getArticlesPageLoading)
  // const error = useSelector(getArticlesPageError)

  const onToggleArticleItemsView = useCallback(
    (newView: ArticleListView) =>
      dispatch(articlesPageActions.setView(newView)),
    [dispatch]
  )

  const mods = {}

  const additionsClasses = [className]

  useInitialEffect(async () => {
    void dispatch(fetchArticlesList())
    void dispatch(articlesPageActions.initState())
  })

  return (
    <DynamicModuleLoader reducers={reducers} shouldRemoveOnUnmout>
      <div className={classNames(styles.ArticlesPage, mods, additionsClasses)}>
        <ToggleItemsView view={view} onViewClick={onToggleArticleItemsView} />
        <ArticleList view={view} articles={articles} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  )
})

export default ArticlesPage
