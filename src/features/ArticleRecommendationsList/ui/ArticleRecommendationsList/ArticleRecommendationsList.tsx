import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleRecommendationsList.module.scss'
import { ArticleList } from 'entities/Articles'
import { Text, TextSize, VStack } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { useGetArticleRecommendationListQuery } from '../../api/articleRecommendationsApi/articleRecommendationsApi'

interface ArticleRecommendationsListProps {
  className?: string
}

const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = memo(
  (props) => {
    const { className } = props

    const { t } = useTranslation(['translation'])

    const { isLoading, data: articles, error } = useGetArticleRecommendationListQuery(3)

    if (isLoading || error) {
      return null
    }

    const mods = {}

    const additionsClasses = [className]

    return (
      <VStack gap="8" className={classNames('', mods, additionsClasses)}>
        <Text size={TextSize.L} title={t('translation:recommend')} />
        <ArticleList
          articles={articles}
          target="_blank"
          className={styles.recommendationsList}
        />
      </VStack>
    )
  }
)

export default ArticleRecommendationsList
