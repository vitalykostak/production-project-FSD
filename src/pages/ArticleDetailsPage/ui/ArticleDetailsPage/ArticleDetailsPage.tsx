import { memo, type FC } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleDetails } from '@/entities/Articles'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib'
import { Page } from '@/widgets/Page'
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList'
import { VStack } from '@/shared/ui/deprecated'
import { ArticleRating } from '@/features/articleRating'

import { articleDetailsPageReducer } from '../../model/slices'
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo(props => {
    const { className } = props

    const { t } = useTranslation(['article'])

    const { id } = useParams<{ id: string }>()

    const mods = {}

    const additionsClasses = [className]

    if (!id) {
        return (
            <Page
                data-testid="ArticleDetailsPage"
                className={classNames('', mods, additionsClasses)}
            >
                {t('article:article_was_not_found')}
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} shouldRemoveOnUnmout>
            <Page
                data-testid="ArticleDetailsPage"
                className={classNames('', mods, additionsClasses)}
            >
                <VStack gap="16">
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRating articleId={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    )
})

export default ArticleDetailsPage
