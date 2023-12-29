import { memo, type FC, useEffect, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleDetails.module.scss'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { useAppDispatch } from '@/shared/lib/hooks'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading
} from '../../model/selectors/articleDetails'
import {
  TextTheme,
  Text,
  TextAlign,
  Skeleton,
  Avatar,
  TextSize,
  Icon
} from '@/shared/ui'
import EyeIcon from '@/shared/assets/icons/eye-icon.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import {
  type ArticleBlock
} from '../../model/types/articles'
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleBlockType } from '../../model/consts/consts'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducersList: ReducersList = {
  articleDetails: articleDetailsReducer
}

const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
  const { className, id } = props

  const { t } = useTranslation('article')
  const dispatch = useAppDispatch()

  const isArticleDetailsLoading = useSelector(getArticleDetailsLoading)
  const articleDetailsData = useSelector(getArticleDetailsData)
  const articleDetailsError = useSelector(getArticleDetailsError)

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} className={styles.block} block={block}/>
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} className={styles.block} block={block}/>
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} className={styles.block} block={block}/>
      default:
        return null
    }
  }, [])

  useEffect(() => {
    if (EXECUTION_ENVIRONMENT === 'app') {
      void dispatch(fetchArticleById(id))
    }
  }, [id, dispatch])

  let content

  if (isArticleDetailsLoading) {
    content = (
      <>
        <Skeleton
          width="200px"
          height="200px"
          borderRadius="50%"
          className={styles.avatar}
        />
        <Skeleton width="300px" height="32px" className={styles.title} />
        <Skeleton width="600px" height="24px" className={styles.skeleton} />
        <Skeleton width="100%" height="200px" className={styles.skeleton} />
        <Skeleton width="100%" height="200px" className={styles.skeleton} />
      </>
    )
  } else if (articleDetailsError) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        title={t('error_while_loading')}
        align={TextAlign.CENTER}
      />
    )
  } else {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar size={200} src={articleDetailsData?.img} />
        </div>
        <Text
          title={articleDetailsData?.title}
          text={articleDetailsData?.subtitle}
          size={TextSize.L}
        />
        <div className={styles.articleInfo}>
          <Icon className={styles.articleInfoIcon} Svg={EyeIcon} />
          <Text text={String(articleDetailsData?.views)} />
        </div>
        <div className={styles.articleInfo}>
          <Icon className={styles.articleInfoIcon} Svg={CalendarIcon} />
          <Text text={String(articleDetailsData?.createdAt)} />
        </div>
        {articleDetailsData?.blocks?.map(renderBlock)}
      </>
    )
  }

  const mods = {}

  const additionsClasses = [className]

  return (
    <DynamicModuleLoader reducers={reducersList} shouldRemoveOnUnmout>
      <div
        className={classNames(styles.ArticleDetails, mods, additionsClasses)}
      >
        {content}
      </div>
    </DynamicModuleLoader>
  )
})

export default ArticleDetails
