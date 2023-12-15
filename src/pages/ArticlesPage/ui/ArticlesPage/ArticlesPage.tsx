import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleList } from 'entities/Articles'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib'
import {
  articlesPageReducer,
  getArticlesPageSelectors
} from '../../model/slices/articlesSlice/articlesPageSlice'
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks'
import { useSelector } from 'react-redux'
import styles from './ArticlesPage.module.scss'
import {
  getArticlesPageLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors/articlesPageSelectors'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { Page } from 'widgets/Page'
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters'
import { useSearchParams } from 'react-router-dom'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage: FC<ArticlesPageProps> = memo((props) => {
  const { className } = props

  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  const articles = useSelector(getArticlesPageSelectors.selectAll)
  const view = useSelector(getArticlesPageView)
  const isLoading = useSelector(getArticlesPageLoading)

  const onLoadNextPart = useCallback(() => {
    if (EXECUTION_ENVIRONMENT !== 'app') {
      return
    }
    void dispatch(fetchNextArticlesPage())
  }, [dispatch])

  const mods = {}

  const additionsClasses = [className]

  useInitialEffect(async () => {
    void dispatch(initArticlesPage(searchParams))
  })

  return (
    <DynamicModuleLoader reducers={reducers} shouldRemoveOnUnmout={false}>
      <Page
        shouldSaveScrollPosition
        onScrollEnd={onLoadNextPart}
        className={classNames('', mods, additionsClasses)}
      >
        <ArticlesPageFilters />
        <ArticleList view={view} articles={articles} isLoading={isLoading} className={styles.list}/>
      </Page>
    </DynamicModuleLoader>
  )
})

export default ArticlesPage
