import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleDetails } from '@/entities/Articles'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib'
import { Page } from '@/widgets/Page'
import { articleDetailsPageReducer } from '../../model/slices'
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList'
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments'
import { VStack } from '@/shared/ui'
import { ArticleRating } from '@/features/articleRating'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo((props) => {
  const { className } = props

  const { t } = useTranslation(['article'])

  const { id } = useParams<{ id: string }>()

  const mods = {}

  const additionsClasses = [className]

  if (!id) {
    return (
      <Page className={classNames('', mods, additionsClasses)}>
        {t('article:article_was_not_found')}
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} shouldRemoveOnUnmout>
      <Page className={classNames('', mods, additionsClasses)}>
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
