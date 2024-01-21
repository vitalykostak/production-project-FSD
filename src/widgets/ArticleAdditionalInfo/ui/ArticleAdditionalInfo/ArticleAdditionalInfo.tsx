import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { type User } from '@/entities/User'
import { Avatar, Card, HStack, VStack, Text } from '@/shared/ui/redesigned'
import { EditArticleButton } from '@/features/EditArticleButton'

interface ArticleAdditionalInfoProps {
    className?: string
    author: User
    createdAt: string
    views: number
    articleId: string
}

const ArticleAdditionalInfo: FC<ArticleAdditionalInfoProps> = memo(props => {
    const { className, author, createdAt, views, articleId } = props
    const { t } = useTranslation(['translation'])

    const mods = {}

    const additionsClasses = [className]

    return (
        <Card cardPadding="24" className={classNames('', mods, additionsClasses)} max>
            <VStack gap="12">
                <HStack gap="4">
                    <Avatar src={author.avatar} size={32} />
                    <Text text={author.username} bold />
                    <Text text={createdAt} />
                </HStack>
                <EditArticleButton articleId={articleId} />
                <Text text={t('translation:views') + ': ' + String(views)} />
            </VStack>
        </Card>
    )
})

export default ArticleAdditionalInfo
