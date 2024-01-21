import { memo, type FC } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ArticleDetails } from '@/entities/Articles'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleRating } from '@/features/articleRating'
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList'

import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments'

interface DetailsContainerProps {
    className?: string
}

const DetailsContainer: FC<DetailsContainerProps> = memo(props => {
    const { className } = props

    const { t } = useTranslation(['article'])
    const { id } = useParams<{ id: string }>()

    const mods = {}

    const additionsClasses = [className]

    if (!id) {
        return t('article:article_was_not_found')
    }

    return (
        <div className={classNames('', mods, additionsClasses)}>
            <ArticleDetails id={id} />
            <ArticleRating articleId={id} />
            <ArticleRecommendationsList />
            <ArticleDetailsComments id={id} />
        </div>
    )
})

export default DetailsContainer
