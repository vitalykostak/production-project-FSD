import { memo, type FC, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './ArticleDetailsComments.module.scss'
import { Text, TextSize } from '@/shared/ui'
import { AddCommentForm } from '@/features/AddCommentForm'
import { CommentList } from '@/entities/Comment'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'
import { useSelector } from 'react-redux'
import { getAddCommentFormText } from '@/features/AddCommentForm/model/selectors/getAddCommentForm/getAddCommentForm'
import { getArticleDetailsCommentsSelectors } from '../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice'
import { getArticleDetailsCommentsLoading } from '../../model/selectors/articleDetailsComments/articleDetailsComments'
import { sendComment } from '../../model/services/sendComment/sendComment'
import { fetchArticleCommentsByArticleId } from '../../model/services/fetchArticleCommentsByArticleId/fetchArticleCommentsByArticleId'
import { useTranslation } from 'react-i18next'

interface ArticleDetailsCommentsProps {
  className?: string
  id?: string
}

const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo(
  (props) => {
    const { className, id } = props

    const { t } = useTranslation(['translation'])
    const dispatch = useAppDispatch()

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

    useInitialEffect(async () => dispatch(fetchArticleCommentsByArticleId(id)))

    const mods = {}

    const additionsClasses = [className]

    return (
      <div
        className={classNames(
          styles.ArticleDetailsComments,
          mods,
          additionsClasses
        )}
      >
        <Text
          size={TextSize.L}
          title={t('translation:comments')}
        />
        <AddCommentForm
          onSendComment={sendCommentHandler}
          text={addCommentFormText}
        />
        <CommentList
          isLoading={articleDetailsCommentsLoading}
          comments={articleDetailsComments}
        />
      </div>
    )
  }
)

export default ArticleDetailsComments
