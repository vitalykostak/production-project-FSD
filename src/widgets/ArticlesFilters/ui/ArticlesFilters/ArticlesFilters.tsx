import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Icon, Input, VStack } from '@/shared/ui/redesigned'
import {
    ArticleSortSelector,
    ArticleTypeTabs,
    type ArticleType,
    type ArticlesSortField,
} from '@/entities/Articles'
import { type TabItem } from '@/shared/ui/deprecated/Tabs/Tabs'
import { type SortOrder } from '@/shared/types'
import SearchIcon from '@/shared/assets/icons/search.svg'

import styles from './ArticlesFilters.module.scss'

interface ArticlesFiltersProps {
    className?: string
    search: string
    onChangeSearch: (search: string) => void
    type: ArticleType
    onChangeType: (tab: TabItem) => void
    order: SortOrder
    sort: ArticlesSortField
    onChangeSort: (newSort: ArticlesSortField) => void
    onChangeOrder: (newOrder: SortOrder) => void
}

const ArticlesFilters: FC<ArticlesFiltersProps> = memo(props => {
    const {
        className,
        search,
        onChangeSearch,
        type,
        onChangeType,
        order,
        sort,
        onChangeSort,
        onChangeOrder,
    } = props

    const { t } = useTranslation(['translation'])

    const mods = {}

    const additionsClasses = [className]

    return (
        <VStack gap="16" className={classNames(styles.ArticlesFilters, mods, additionsClasses)}>
            <Input
                placeholder={t('translation:search')}
                value={search}
                onChange={onChangeSearch}
                addonLeft={<Icon width={32} height={32} Svg={SearchIcon} />}
            />
            <ArticleTypeTabs type={type} onChangeType={onChangeType} />
            <div className={styles.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
            </div>
        </VStack>
    )
})

export default ArticlesFilters
