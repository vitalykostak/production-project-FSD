import { memo, type FC, useCallback, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticlesPageFilters.module.scss'
import { useSelector } from 'react-redux'
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors/articlesPageSelectors'
import { useAppDispatch, useDebounce } from 'shared/lib/hooks'
import {
  type ArticleListView,
  ToggleItemsView,
  ArticleSortSelector,
  type ArticlesSortField
} from 'entities/Articles'
import { articlesPageActions } from '../../model/slices/articlesSlice/articlesPageSlice'
import { Card, Input } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { type SortOrder } from 'shared/types'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import Tabs, { type TabItem } from 'shared/ui/Tabs/Tabs'
import { ArticleType } from 'entities/Articles'

interface ArticlesPageFiltersProps {
  className?: string
}

const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = memo((props) => {
  const { className } = props

  const dispatch = useAppDispatch()
  const { t } = useTranslation(['translation', 'article'])

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
    [dispatch, fetchData]
  )

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData]
  )

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search))
      dispatch(articlesPageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData]
  )

  const onChangeType = useCallback(
    (tab: TabItem) => {
      dispatch(articlesPageActions.setType(tab.value as ArticleType))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData]
  )

  const onToggleArticleItemsView = useCallback(
    (newView: ArticleListView) =>
      dispatch(articlesPageActions.setView(newView)),
    [dispatch]
  )

  const tabs = useMemo<TabItem[]>(
    () =>
      Object.values<ArticleType>(ArticleType).map((type) => ({
        value: type,
        content: t(`article:articles_types.${type}`)
      })),
    [t]
  )

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
      <Tabs
        tabs={tabs}
        value={type}
        onTabClick={onChangeType}
        className={styles.tabs}
      />
    </div>
  )
})

export default ArticlesPageFilters
