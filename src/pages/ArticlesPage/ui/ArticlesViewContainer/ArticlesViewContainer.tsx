import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleItemsView } from '@/entities/Articles'

import { useArticleFilters } from '../../hooks'

interface ArticlesViewContainerProps {
    className?: string
}

const ArticlesViewContainer: FC<ArticlesViewContainerProps> = memo(props => {
    const { className } = props

    const {
        view,

        onToggleArticleItemsView,
    } = useArticleFilters()

    const mods = {}

    const additionsClasses = [className]

    return (
        <ToggleItemsView
            view={view}
            onViewClick={onToggleArticleItemsView}
            className={classNames('', mods, additionsClasses)}
        />
    )
})

export default ArticlesViewContainer
