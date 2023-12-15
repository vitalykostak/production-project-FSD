import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextSize } from 'shared/ui'
import styles from './ArticleDetailsPage.module.scss'
import { ArticleDetails, ArticleList } from 'entities/Articles'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib'
import {
  getArticleDetailsCommentsSelectors
} from '../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleDetailsCommentsLoading } from '../../model/selectors/articleDetailsComments/articleDetailsComments'
import { fetchArticleCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchArticleCommentsByArticleId/fetchArticleCommentsByArticleId'
import { useInitialEffect, useAppDispatch } from 'shared/lib/hooks'
import { AddCommentForm } from 'features/AddCommentForm'
import { getAddCommentFormText } from 'features/AddCommentForm/model/selectors/getAddCommentForm/getAddCommentForm'
import { sendComment } from '../../model/services/sendComment/sendComment'
import { Page } from 'widgets/Page'
import {
  getArticleDetailsRecommendationsSelectors
} from '../../model/slices/articleDetailsRecommendationsSlice/articleDetailsRecommendationsSlice'
import { getArticleDetailsRecommendationsLoading } from '../../model/selectors/articleDetailsRecommendations/articleDetailsRecommendations'
import { fetchRecommendationsList } from '../../model/services/fetchRecommendationsList/fetchRecommendationsList'
import { articleDetailsPageReducer } from '../../model/slices'
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo((props) => {
  const { className } = props

  const { t } = useTranslation(['article', 'translation'])
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()

  const articleDetailsComments = useSelector(
    getArticleDetailsCommentsSelectors.selectAll
  )

  const articleDetailsCommentsLoading = useSelector(
    getArticleDetailsCommentsLoading
  )

  const articleDetailsRecommendations = useSelector(
    getArticleDetailsRecommendationsSelectors.selectAll
  )

  const articleDetailsRecommendationsLoading = useSelector(
    getArticleDetailsRecommendationsLoading
  )

  const addCommentFormText = useSelector(getAddCommentFormText)

  const sendCommentHandler = useCallback(
    (text: string) => {
      void dispatch(sendComment(text))
    },
    [dispatch]
  )

  useInitialEffect(async () => dispatch(fetchArticleCommentsByArticleId(id)))

  useInitialEffect(async () => dispatch(fetchRecommendationsList()))

  const mods = {}

  const additionsClasses = [className]

  if (!id) {
    return (
      <Page className={classNames('', mods, additionsClasses)}>
        {t('article:article_was_not_found')}
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} shouldRemoveOnUnmout>
      <Page className={classNames('', mods, additionsClasses)}>
        <ArticleDetailsPageHeader/>
        <ArticleDetails id={id} />
        <Text size={TextSize.L} title={t('translation:recommend')} />
        <ArticleList
          isLoading={articleDetailsRecommendationsLoading}
          articles={articleDetailsRecommendations}
          target='_blank'
          className={styles.recommendationsList}
        />
        <Text
          size={TextSize.L}
          title={t('translation:comments')}
          className={styles.commentsTitle}
        />
        <AddCommentForm
          onSendComment={sendCommentHandler}
          text={addCommentFormText}
        />
        <CommentList
          isLoading={articleDetailsCommentsLoading}
          comments={articleDetailsComments}
        />
      </Page>
    </DynamicModuleLoader>
  )
})

export default ArticleDetailsPage
