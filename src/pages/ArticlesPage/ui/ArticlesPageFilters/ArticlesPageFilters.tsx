import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Card, Input } from '@/shared/ui/deprecated'
import { ToggleItemsView, ArticleSortSelector, ArticleTypeTabs } from '@/entities/Articles'
import { classNames } from '@/shared/lib/classNames/classNames'

import { useArticleFilters } from '../../hooks'

import styles from './ArticlesPageFilters.module.scss'

interface ArticlesPageFiltersProps {
    className?: string
}

const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = memo(props => {
    const { className } = props

    const { t } = useTranslation(['translation', 'article'])

    const {
        view,
        sort,
        order,
        search,
        type,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onChangeType,
        onToggleArticleItemsView,
    } = useArticleFilters()

    const mods = {}

    const additionsClasses = [className]

    return (
        <div className={classNames('', mods, additionsClasses)}>
            <div className={styles.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ToggleItemsView view={view} onViewClick={onToggleArticleItemsView} />
            </div>
            <Card className={styles.search}>
                <Input
                    placeholder={t('translation:search')}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
            <ArticleTypeTabs type={type} onChangeType={onChangeType} />
        </div>
    )
})

export default ArticlesPageFilters
