import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
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
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks'
import { useSelector } from 'react-redux'
import {
  getArticlesPageLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors/articlesPageSelectors'
import { Page } from 'shared/ui'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'

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

  const onToggleArticleItemsView = useCallback(
    (newView: ArticleListView) =>
      dispatch(articlesPageActions.setView(newView)),
    [dispatch]
  )

  const onLoadNextPart = useCallback(() => {
    if (EXECUTION_ENVIRONMENT !== 'app') {
      return
    }
    void dispatch(fetchNextArticlesPage())
  }, [dispatch])

  const mods = {}

  const additionsClasses = [className]

  useInitialEffect(async () => {
    void dispatch(initArticlesPage())
  })

  return (
    <DynamicModuleLoader reducers={reducers} shouldRemoveOnUnmout={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames('', mods, additionsClasses)}
      >
        <ToggleItemsView view={view} onViewClick={onToggleArticleItemsView} />
        <ArticleList view={view} articles={articles} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  )
})

export default ArticlesPage
