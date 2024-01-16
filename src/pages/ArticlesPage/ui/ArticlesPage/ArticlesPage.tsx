import { memo, type FC, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'
import { Page } from '@/widgets/Page'
import { ArticlesPageFirstVisitGreetingModal } from '@/features/articlesPageFirstVisitGreeting'
import { VStack } from '@/shared/ui/redesigned'
import { ToggleFeature } from '@/shared/lib/featureFlags'
import { StickyLayout } from '@/shared/layouts'

import { articlesPageReducer } from '../../model/slices/articlesSlice/articlesPageSlice'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters'
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList'
import ArticlesViewContainer from '../ArticlesViewContainer/ArticlesViewContainer'
import ArticlesFilterContainer from '../ArticlesFilterContainer/ArticlesFilterContainer'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
}

const ArticlesPage: FC<ArticlesPageProps> = memo(props => {
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

    const content = (
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={
                <Page
                    shouldSaveScrollPosition
                    onScrollEnd={onLoadNextPart}
                    className={classNames('', mods, additionsClasses)}
                    data-testid="ArticlesPage"
                >
                    <VStack gap="16">
                        <ArticlesPageFilters />
                        <ArticleInfiniteList />
                    </VStack>
                    <ArticlesPageFirstVisitGreetingModal />
                </Page>
            }
            onEnabled={
                <StickyLayout
                    left={<ArticlesViewContainer />}
                    content={
                        <Page
                            shouldSaveScrollPosition
                            onScrollEnd={onLoadNextPart}
                            className={classNames('', mods, additionsClasses)}
                            data-testid="ArticlesPage"
                        >
                            <VStack gap="16">
                                <ArticleInfiniteList />
                            </VStack>
                            <ArticlesPageFirstVisitGreetingModal />
                        </Page>
                    }
                    right={<ArticlesFilterContainer />}
                />
            }
        />
    )

    return (
        <DynamicModuleLoader reducers={reducers} shouldRemoveOnUnmout={false}>
            {content}
        </DynamicModuleLoader>
    )
})

export default ArticlesPage
