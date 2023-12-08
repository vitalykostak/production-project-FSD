import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Articles'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo((props) => {
  const { className } = props

  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  const mods = {}

  const additionsClasses = [className]

  if (!id) {
    return (
      <div
        className={classNames(styles.ArticleDetailsPage, mods, additionsClasses)}
      >
        {t('article_was_not_found')}
      </div>
    )
  }

  return (
    <div
      className={classNames(styles.ArticleDetailsPage, mods, additionsClasses)}
    >
      <ArticleDetails id={id}/>
    </div>
  )
})

export default ArticleDetailsPage
