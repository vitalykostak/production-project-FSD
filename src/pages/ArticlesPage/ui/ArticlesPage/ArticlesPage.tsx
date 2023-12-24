import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib'
import { articlesPageReducer } from '../../model/slices/articlesSlice/articlesPageSlice'
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { Page } from 'widgets/Page'
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters'
import { useSearchParams } from 'react-router-dom'
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList'
import { VStack } from 'shared/ui'

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
        <VStack gap="16">
          <ArticlesPageFilters />
          <ArticleInfiniteList />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
})

export default ArticlesPage
