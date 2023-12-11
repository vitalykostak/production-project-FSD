import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui'
import styles from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Articles'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib'
import {
  articleDetailsCommentsReducer,
  getArticleDetailsCommentsSelectors
} from '../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsCommentsLoading
} from '../../model/selectors/articleDetailsComments'
import { fetchArticleCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchArticleCommentsByArticleId/fetchArticleCommentsByArticleId'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { AddCommentForm } from 'features/AddCommentForm'
import { getAddCommentFormText } from 'features/AddCommentForm/model/selectors/getAddCommentForm/getAddCommentForm'
import { sendComment } from '../../model/services/sendComment/sendComment'

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

  const articleDetailsComments = useSelector(
    getArticleDetailsCommentsSelectors.selectAll
  )

  const articleDetailsCommentsLoading = useSelector(
    getArticleDetailsCommentsLoading
  )
  // const articleDetailsCommentsError = useSelector(
  //   getArticleDetailsCommentsError
  // )

  const addCommentFormText = useSelector(getAddCommentFormText)

  const sendCommentHandler = useCallback((text: string) => {
    void dispatch(sendComment(text))
  }, [dispatch])

  useInitialEffect(async () => dispatch(fetchArticleCommentsByArticleId(id)))

  const mods = {}

  const additionsClasses = [className]

  if (!id) {
    return (
      <div
        className={classNames(
          styles.ArticleDetailsPage,
          mods,
          additionsClasses
        )}
      >
        {t('article:article_was_not_found')}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} shouldRemoveOnUnmout>
      <div
        className={classNames(
          styles.ArticleDetailsPage,
          mods,
          additionsClasses
        )}
      >
        <ArticleDetails id={id} />
        <Text
          title={t('translation:comments')}
          className={styles.commentsTitle}
        />
        <AddCommentForm onSendComment={sendCommentHandler} text={addCommentFormText}/>
        <CommentList
          isLoading={articleDetailsCommentsLoading}
          comments={articleDetailsComments}
        />
      </div>
    </DynamicModuleLoader>
  )
})

export default ArticleDetailsPage
