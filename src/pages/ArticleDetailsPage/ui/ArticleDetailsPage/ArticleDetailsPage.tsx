import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, Page, Text } from 'shared/ui'
import styles from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Articles'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib'
import {
  articleDetailsCommentsReducer,
  getArticleDetailsCommentsSelectors
} from '../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleDetailsCommentsLoading } from '../../model/selectors/articleDetailsComments'
import { fetchArticleCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchArticleCommentsByArticleId/fetchArticleCommentsByArticleId'
import { useInitialEffect, useAppDispatch } from 'shared/lib/hooks'
import { AddCommentForm } from 'features/AddCommentForm'
import { getAddCommentFormText } from 'features/AddCommentForm/model/selectors/getAddCommentForm/getAddCommentForm'
import { sendComment } from '../../model/services/sendComment/sendComment'
import { routePaths } from 'shared/config/routeConfig/routeConfig'
import { ButtonTheme } from 'shared/ui/Button/Button'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo((props) => {
  const { className } = props

  const { t } = useTranslation(['article', 'translation'])
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const articleDetailsComments = useSelector(
    getArticleDetailsCommentsSelectors.selectAll
  )

  const articleDetailsCommentsLoading = useSelector(
    getArticleDetailsCommentsLoading
  )

  const addCommentFormText = useSelector(getAddCommentFormText)

  const sendCommentHandler = useCallback(
    (text: string) => {
      void dispatch(sendComment(text))
    },
    [dispatch]
  )

  const onBackToList = useCallback(
    () => navigate(routePaths.articles),
    [navigate]
  )

  useInitialEffect(async () => dispatch(fetchArticleCommentsByArticleId(id)))

  const mods = {}

  const additionsClasses = [className]

  if (!id) {
    return (
      <Page
        className={classNames(
          '',
          mods,
          additionsClasses
        )}
      >
        {t('article:article_was_not_found')}
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} shouldRemoveOnUnmout>
      <Page
        className={classNames(
          '',
          mods,
          additionsClasses
        )}
      >
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>{t('translation:back')}</Button>
        <ArticleDetails id={id} />
        <Text
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
