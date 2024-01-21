import { memo, type FC, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useAppDispatch } from '@/shared/lib/hooks'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, Skeleton, AppImage, VStack } from '@/shared/ui/redesigned'
import { ToggleFeature } from '@/shared/lib/featureFlags'

import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import {
    useArticleDetailsData,
    useArticleDetailsError,
    useArticleDetailsLoading,
} from '../../model/selectors/articleDetails'
import { type ArticleBlock } from '../../model/types/articles'
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleBlockType } from '../../model/consts/consts'

import styles from './ArticleDetails.module.scss'
import ArticleDetailsDeprecated from './ArticleDetailsDeprecated/ArticleDetailsDeprecated'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducersList: ReducersList = {
    articleDetails: articleDetailsReducer,
}

const ArticleDetailsRedesigned: FC<ArticleDetailsProps> = memo(props => {
    const { className, id } = props

    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()

    const isArticleDetailsLoading = useArticleDetailsLoading()
    const articleDetailsData = useArticleDetailsData()
    const articleDetailsError = useArticleDetailsError()

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        key={block.id}
                        className={styles.block}
                        block={block}
                    />
                )
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        key={block.id}
                        className={styles.block}
                        block={block}
                    />
                )
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        key={block.id}
                        className={styles.block}
                        block={block}
                    />
                )
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
            <VStack gap="12" max>
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
            </VStack>
        )
    } else if (articleDetailsError) {
        content = <Text variant="error" title={t('error_while_loading')} align="center" />
    } else {
        content = (
            <>
                <Text
                    title={articleDetailsData?.title}
                    size="l"
                    data-testid="ArticleDetailsHeaders"
                    bold
                />
                <Text text={articleDetailsData?.subtitle} />
                <AppImage
                    fallback={<Skeleton height="420px" width="100%" borderRadius="16" />}
                    src={articleDetailsData?.img}
                    className={styles.img}
                />
                {articleDetailsData?.blocks?.map(renderBlock)}
            </>
        )
    }

    const mods = {}

    const additionsClasses = [className]

    return (
        <DynamicModuleLoader reducers={reducersList} shouldRemoveOnUnmout>
            <div className={classNames(styles.ArticleDetails, mods, additionsClasses)}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
})

const ArticleDetails: FC<ArticleDetailsProps> = memo(props => (
    <ToggleFeature
        featureFlag="isAppRedesigned"
        onDisabled={<ArticleDetailsDeprecated {...props} />}
        onEnabled={<ArticleDetailsRedesigned {...props} />}
    />
))

export default ArticleDetails
