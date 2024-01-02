import { memo, type FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { Button, ButtonTheme } from '@/shared/ui'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getArticleDetailsData } from '@/entities/Articles'
import { getArticleEditRoute, getArticlesRoute } from '@/shared/consts/router'

import { getCanUserEditArticle } from '../../model/selectors/articleDetailsPage/articleDetailsPage'

import styles from './ArticleDetailsPageHeader.module.scss'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo(
  (props) => {
    const { className } = props

    const { t } = useTranslation('translation')
    const navigate = useNavigate()

    const canEdit = useSelector(getCanUserEditArticle)
    const article = useSelector(getArticleDetailsData)

    const onBackToList = useCallback(
      () => navigate(getArticlesRoute()),
      [navigate]
    )

    const onEdit = useCallback(
      () => navigate(getArticleEditRoute(article?.id || '')),
      [navigate, article]
    )

    const mods = {}

    const additionsClasses = [className]

    return (
      <div
        className={classNames(
          styles.ArticleDetailsPageHeader,
          mods,
          additionsClasses
        )}
      >
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t('translation:back')}
        </Button>
        {canEdit && (
          <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
            {t('translation:edit')}
          </Button>
        )}
      </div>
    )
  }
)

export default ArticleDetailsPageHeader
