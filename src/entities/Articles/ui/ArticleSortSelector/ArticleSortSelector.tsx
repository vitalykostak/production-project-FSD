import { memo, type FC, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleSortSelector.module.scss'
import { Select, type SelectOption } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { ArticlesSortField } from '../../model/types/articlesSortField'
import { type SortOrder } from 'shared/types'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticlesSortField
  order: SortOrder
  onChangeSort: (newSort: ArticlesSortField) => void
  onChangeOrder: (newOrder: SortOrder) => void
}

const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo((props) => {
  const { className, sort, order, onChangeSort, onChangeOrder } = props

  const { t } = useTranslation('translation')

  const sortFieldOptions = useMemo<Array<SelectOption<ArticlesSortField>>>(
    () => [
      {
        value: ArticlesSortField.CREATED,
        content: t('translation:sortedByOptions.creation_date')
      },
      {
        value: ArticlesSortField.TITLE,
        content: t('translation:sortedByOptions.title')
      },
      {
        value: ArticlesSortField.VIEWS,
        content: t('translation:sortedByOptions.views')
      }
    ],
    [t]
  )

  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
    () => [
      {
        value: 'asc',
        content: t('translation:orderedByOptions.ascending')
      },
      {
        value: 'desc',
        content: t('translation:orderedByOptions.descending')
      }
    ],
    [t]
  )

  const mods = {}

  const additionsClasses = [className]

  return (
    <div
      className={classNames(styles.ArticleSortSelector, mods, additionsClasses)}
    >
      <Select<ArticlesSortField>
        label={t('translation:sorted_by')}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        label={t('translation:ordered_by')}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
        className={styles.orderSelector}
      />
    </div>
  )
})

export default ArticleSortSelector
