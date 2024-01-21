import { memo, type FC } from 'react'
import { useSelector } from 'react-redux'

import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo'
import { Card } from '@/shared/ui/redesigned'
import { getArticleDetailsData } from '@/entities/Articles'
import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './AdditionalInfoContainer.module.scss'

interface AdditionalInfoContainerProps {
    className?: string
}

const AdditionalInfoContainer: FC<AdditionalInfoContainerProps> = memo(props => {
    const { className } = props

    const articleData = useSelector(getArticleDetailsData)

    if (!articleData) {
        return null
    }

    const { user: author, createdAt, views, id: articleId } = articleData || {}

    const mods = {}

    const additionsClasses = [className]

    return (
        <Card
            cardBorder="borderRound"
            className={classNames(styles.AdditionalInfoContainer, mods, additionsClasses)}
        >
            <ArticleAdditionalInfo
                author={author}
                createdAt={new Date(createdAt).toLocaleDateString()}
                views={views}
                articleId={articleId}
            />
        </Card>
    )
})

export default AdditionalInfoContainer
