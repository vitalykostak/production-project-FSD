import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticlesPage.module.scss'
import { useTranslation } from 'react-i18next'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = memo((props) => {
  const { className } = props

  const { t } = useTranslation('article')

  const mods = {}

  const additionsClasses = [className]

  return (
    <div className={classNames(styles.ArticlesPage, mods, additionsClasses)}>
      {t('ArticlesPage')}
    </div>
  )
})

export default ArticlesPage
