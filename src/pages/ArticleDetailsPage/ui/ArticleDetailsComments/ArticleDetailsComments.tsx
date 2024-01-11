import { memo, type FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextSize } from '@/shared/ui/deprecated'
import { AddCommentForm, useAddCommentFormText } from '@/features/AddCommentForm'
import { CommentList } from '@/entities/Comment'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'

import { getArticleDetailsCommentsSelectors } from '../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice'
import { getArticleDetailsCommentsLoading } from '../../model/selectors/articleDetailsComments/articleDetailsComments'
import { sendComment } from '../../model/services/sendComment/sendComment'
import { fetchArticleCommentsByArticleId } from '../../model/services/fetchArticleCommentsByArticleId/fetchArticleCommentsByArticleId'

import styles from './ArticleDetailsComments.module.scss'

interface ArticleDetailsCommentsProps {
    className?: string
    id?: string
}

const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo(props => {
    const { className, id } = props

    const { t } = useTranslation(['translation'])
    const dispatch = useAppDispatch()

    const articleDetailsComments = useSelector(getArticleDetailsCommentsSelectors.selectAll)

    const articleDetailsCommentsLoading = useSelector(getArticleDetailsCommentsLoading)

    const addCommentFormText = useAddCommentFormText()

    const sendCommentHandler = useCallback(
        (text: string) => {
            void dispatch(sendComment(text))
        },
        [dispatch],
    )

    useInitialEffect(async () => dispatch(fetchArticleCommentsByArticleId(id)))

    const mods = {}

    const additionsClasses = [className]

    return (
        <div
            className={classNames(styles.ArticleDetailsComments, mods, additionsClasses)}
            data-testid="ArticleDetailsComments"
        >
            <Text
                size={TextSize.L}
                title={t('translation:comments')}
                data-testid="ArticleDetailsComments"
            />
            <AddCommentForm
                onSendComment={sendCommentHandler}
                text={addCommentFormText}
                data-testid="ArticleDetailsAddCommentForm"
            />
            <CommentList
                isLoading={articleDetailsCommentsLoading}
                comments={articleDetailsComments}
                data-testid="ArticleDetailsAddCommentsList"
            />
        </div>
    )
})

export default ArticleDetailsComments
