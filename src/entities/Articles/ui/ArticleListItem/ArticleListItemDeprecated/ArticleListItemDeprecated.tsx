import { memo, type FC, type HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, Button, Card, Icon, Text } from '@/shared/ui/deprecated'
import EyeIcon from '@/shared/assets/icons/eye-icon.svg'
import { ButtonTheme } from '@/shared/ui/deprecated/Button/Button'
import { getArticleDetailsRoute } from '@/shared/consts/router'
import { Avatar } from '@/shared/ui/redesigned'

import { type Article, type ArticleTextBlock } from '../../../model/types/articles'
import { ArticleBlockType, ArticleListView } from '../../../model/consts/consts'
import ArticleTextBlockComponent from '../../ArticleTextBlockComponent/ArticleTextBlockComponent'

import styles from './ArticleListItemDeprecated.module.scss'

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleListView
    target?: HTMLAttributeAnchorTarget
}

const ArticleListItemDeprecated: FC<ArticleListItemProps> = memo(props => {
    const { className, article, view = ArticleListView.SMALL, target } = props

    const { t } = useTranslation('translation')

    const types = <Text text={article.type.join(', ')} className={styles.types} />
    const views = (
        <>
            <Text text={String(article.views)} className={styles.views} />
            <Icon Svg={EyeIcon} className={styles.viewsIcon} />
        </>
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
                <Card>
                    <div className={styles.header}>
                        <Avatar size={30} src={article.user.avatar} className={styles.avatar} />
                        <Text text={article.user.username} className={styles.username} />
                        <Text text={article.createdAt} className={styles.articleData} />
                    </div>
                    <Text title={article.title} className={styles.title} />
                    {types}
                    <img src={article.img} alt={article.title} className={styles.img} />
                    <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
                    <div className={styles.footer}>
                        <AppLink
                            to={getArticleDetailsRoute(article.id)}
                            target={target}
                            className={styles.appLink}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>{t('read_more')}...</Button>
                        </AppLink>

                        {views}
                    </div>
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

export default ArticleListItemDeprecated
