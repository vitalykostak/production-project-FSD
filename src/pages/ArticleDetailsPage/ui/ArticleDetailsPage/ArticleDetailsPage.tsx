import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo((props) => {
  const { className } = props

  const { t } = useTranslation('article')

  const mods = {}

  const additionsClasses = [className]

  return (
    <div
      className={classNames(styles.ArticleDetailsPage, mods, additionsClasses)}
    >
      {t('ArticleDetailsPage')}
    </div>
  )
})

export default ArticleDetailsPage
