import { useSelector } from 'react-redux'
import { useCallback } from 'react'

import { useAppDispatch, useDebounce } from '@/shared/lib/hooks'
import { type ArticleListView, type ArticleType, type ArticlesSortField } from '@/entities/Articles'
import { type SortOrder } from '@/shared/types'
import { type TabItem } from '@/shared/ui/deprecated/Tabs/Tabs'

import { articlesPageActions } from '../../model/slices/articlesSlice/articlesPageSlice'
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors/articlesPageSelectors'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'

export const useArticleFilters = () => {
    const dispatch = useAppDispatch()

    const view = useSelector(getArticlesPageView)
    const sort = useSelector(getArticlesPageSort)
    const order = useSelector(getArticlesPageOrder)
    const search = useSelector(getArticlesPageSearch)
    const type = useSelector(getArticlesPageType)

    const fetchData = useCallback(() => {
        void dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onChangeSort = useCallback(
        (newSort: ArticlesSortField) => {
            dispatch(articlesPageActions.setSort(newSort))
            dispatch(articlesPageActions.setPage(1))
            fetchData()
        },
        [dispatch, fetchData],
    )

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlesPageActions.setOrder(newOrder))
            dispatch(articlesPageActions.setPage(1))
            fetchData()
        },
        [dispatch, fetchData],
    )

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageActions.setSearch(search))
            dispatch(articlesPageActions.setPage(1))
            debouncedFetchData()
        },
        [dispatch, debouncedFetchData],
    )

    const onChangeType = useCallback(
        (tab: TabItem) => {
            dispatch(articlesPageActions.setType(tab.value as ArticleType))
            dispatch(articlesPageActions.setPage(1))
            fetchData()
        },
        [dispatch, fetchData],
    )

    const onToggleArticleItemsView = useCallback(
        (newView: ArticleListView) => dispatch(articlesPageActions.setView(newView)),
        [dispatch],
    )

    return {
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
    }
}
