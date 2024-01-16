import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticlesFilters } from '@/widgets/ArticlesFilters'

import { useArticleFilters } from '../../hooks'

interface ArticlesFilterContainerProps {
    className?: string
}

const ArticlesFilterContainer: FC<ArticlesFilterContainerProps> = memo(props => {
    const { className } = props

    const { sort, order, search, type, onChangeSort, onChangeOrder, onChangeSearch, onChangeType } =
        useArticleFilters()

    const mods = {}

    const additionsClasses = [className]

    return (
        <ArticlesFilters
            sort={sort}
            order={order}
            search={search}
            className={classNames('', mods, additionsClasses)}
            type={type}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeType}
        />
    )
})

export default ArticlesFilterContainer
