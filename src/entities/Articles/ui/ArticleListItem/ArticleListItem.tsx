import { memo, type FC, type HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import {
    AppLink,
    Button,
    Card,
    Icon,
    Text,
    Avatar,
    HStack,
    VStack,
    AppImage,
} from '@/shared/ui/redesigned'
import EyeIcon from '@/shared/assets/icons/eye-icon.svg'
import { getArticleDetailsRoute } from '@/shared/consts/router'
import { ToggleFeature } from '@/shared/lib/featureFlags'

import { type Article, type ArticleTextBlock } from '../../model/types/articles'
import { ArticleBlockType, ArticleListView } from '../../model/consts/consts'

import ArticleListItemDeprecated from './ArticleListItemDeprecated/ArticleListItemDeprecated'
import styles from './ArticleListItem.module.scss'

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleListView
    target?: HTMLAttributeAnchorTarget
}

const ArticleListItemRedesigned: FC<ArticleListItemProps> = memo(props => {
    const { className, article, view = ArticleListView.SMALL, target } = props

    const { t } = useTranslation('translation')

    const types = <Text text={article.type.join(', ')} className={styles.types} />
    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} className={styles.viewsIcon} />
            <Text text={String(article.views)} className={styles.views} />
        </HStack>
    )

    const mods = {}

    const additionsClasses = [className]

    if (view === ArticleListView.BIG) {
        const textBlock = article.blocks.find(
            b => b.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock
        return (
            <div
                className={classNames('', mods, [...additionsClasses, styles[view]])}
                data-testid="ArticleListItem"
            >
                <Card cardPadding="24">
                    <VStack gap="8">
                        <HStack gap="8" max>
                            <Avatar size={32} src={article.user.avatar} className={styles.avatar} />
                            <Text text={article.user.username} bold />
                            <Text text={article.createdAt} />
                        </HStack>
                        <Text title={article.title} bold />
                        <Text text={article.subtitle} size="s" />
                        <AppImage src={article.img} alt={article.title} className={styles.img} />
                        {textBlock && (
                            <Text
                                text={textBlock.paragraphs.slice(0.2).join(' ')}
                                className={styles.textBlock}
                            />
                        )}
                        <HStack justify="between" align="center" max>
                            <AppLink
                                to={getArticleDetailsRoute(article.id)}
                                target={target}
                                className={styles.appLink}
                            >
                                <Button variant="outline">{t('read_more')}...</Button>
                            </AppLink>
                            {views}
                        </HStack>
                    </VStack>
                </Card>
            </div>
        )
    }

    return (
        <div
            className={classNames('', mods, [...additionsClasses, styles[view]])}
            data-testid="ArticleListItem"
        >
            <AppLink
                to={getArticleDetailsRoute(article.id)}
                target={target}
                className={styles.appLink}
            >
                <Card>
                    <div className={styles.imageWrapper}>
                        <img src={article.img} alt={article.title} className={styles.img} />
                        <Text text={article.createdAt} className={styles.articleDate} />
                    </div>
                    <div className={styles.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={styles.title} />
                </Card>
            </AppLink>
        </div>
    )
})

const ArticleListItem: FC<ArticleListItemProps> = memo(props => (
    <ToggleFeature
        featureFlag="isAppRedesigned"
        onDisabled={<ArticleListItemDeprecated {...props} />}
        onEnabled={<ArticleListItemRedesigned {...props} />}
    />
))

export default ArticleListItem
