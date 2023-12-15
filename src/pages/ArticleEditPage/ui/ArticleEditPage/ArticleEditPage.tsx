import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleEditPage.module.scss'
import { Page } from 'widgets/Page'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo((props) => {
  const { className } = props

  const { t } = useTranslation(['article'])
  const { id } = useParams<{ id: string }>()

  const isEdit = Boolean(id)

  const mods = {}

  const additionsClasses = [className]

  return (
    <Page
      className={classNames(styles.ArticleEditPage, mods, additionsClasses)}
    >
      {isEdit ? t('article:edit_article_with_id', { id }) : t('article:create_article')}
    </Page>
  )
})

export default ArticleEditPage
