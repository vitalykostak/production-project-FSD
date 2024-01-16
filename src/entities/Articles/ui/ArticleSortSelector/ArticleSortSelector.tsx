import { memo, type FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Select, type SelectOption } from '@/shared/ui/deprecated'
import { type SortOrder } from '@/shared/types'
import { ToggleFeature } from '@/shared/lib/featureFlags'
import { ListBox, Text, VStack } from '@/shared/ui/redesigned'

import { ArticlesSortField } from '../../model/consts/articlesSortField'

import styles from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
    className?: string
    sort: ArticlesSortField
    order: SortOrder
    onChangeSort: (newSort: ArticlesSortField) => void
    onChangeOrder: (newOrder: SortOrder) => void
}

const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo(props => {
    const { className, sort, order, onChangeSort, onChangeOrder } = props

    const { t } = useTranslation('translation')

    const sortFieldOptions = useMemo<Array<SelectOption<ArticlesSortField>>>(
        () => [
            {
                value: ArticlesSortField.CREATED,
                content: t('translation:sortedByOptions.creation_date'),
            },
            {
                value: ArticlesSortField.TITLE,
                content: t('translation:sortedByOptions.title'),
            },
            {
                value: ArticlesSortField.VIEWS,
                content: t('translation:sortedByOptions.views'),
            },
        ],
        [t],
    )

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
        () => [
            {
                value: 'asc',
                content: t('translation:orderedByOptions.ascending'),
            },
            {
                value: 'desc',
                content: t('translation:orderedByOptions.descending'),
            },
        ],
        [t],
    )

    const mods = {}

    const additionsClasses = [className]

    return (
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={
                <div className={classNames(styles.ArticleSortSelector, mods, additionsClasses)}>
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
            }
            onEnabled={
                <VStack className={classNames('', mods, additionsClasses)} gap="8">
                    <Text text={t('translation:sorted_by')} />
                    <ListBox<ArticlesSortField>
                        items={sortFieldOptions}
                        value={sort}
                        onChange={onChangeSort}
                    />
                    <ListBox<SortOrder>
                        items={orderOptions}
                        value={order}
                        onChange={onChangeOrder}
                    />
                </VStack>
            }
        />
    )
})

export default ArticleSortSelector
