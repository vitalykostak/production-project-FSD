import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Avatar, Button, Card, Icon, Text } from 'shared/ui'
import styles from './ArticleListItem.module.scss'
import {
  ArticleListView,
  type Article,
  ArticleBlockType,
  type ArticleTextBlock
} from '../../model/types/articles'
import EyeIcon from 'shared/assets/icons/eye-icon.svg'
import { useTranslation } from 'react-i18next'
import { ButtonTheme } from 'shared/ui/Button/Button'
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useNavigate } from 'react-router-dom'
import { routePaths } from 'shared/config/routeConfig/routeConfig'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleListView
}

const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
  const { className, article, view = ArticleListView.SMALL } = props

  const { t } = useTranslation('translation')

  const navigate = useNavigate()
  const onOpenArticle = useCallback(
    () => navigate(routePaths.articles_details + article.id),
    [navigate, article.id]
  )

  const types = (
    <Text text={article.type.join(', ')} className={styles.types} />
  )
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
      (b) => b.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock
    return (
      <div
        className={classNames('', mods, [...additionsClasses, styles[view]])}
      >
        <Card>
          <div className={styles.header}>
            <Avatar
              size={30}
              src={article.user.avatar}
              className={styles.avatar}
            />
            <Text text={article.user.username} className={styles.username} />
            <Text text={article.createdAt} className={styles.articleData} />
          </div>
          <Text title={article.title} className={styles.title} />
          {types}
          <img src={article.img} alt={article.title} className={styles.img} />
          <ArticleTextBlockComponent
            block={textBlock}
            className={styles.textBlock}
          />
          <div className={styles.footer}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>
              {t('read_more')}...
            </Button>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames('', mods, [...additionsClasses, styles[view]])}>
      <Card onClick={onOpenArticle}>
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
    </div>
  )
})

export default ArticleListItem
