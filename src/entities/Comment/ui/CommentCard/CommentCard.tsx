import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import {
    AppLink as AppLinkDeprecated,
    Skeleton as SkeletonDeprecated,
    Text as TextDeprecated,
    Avatar as AvatarDeprecated,
} from '@/shared/ui/deprecated'
import {
    Skeleton as SkeletonRedesigned,
    Text,
    AppLink,
    Card,
    Avatar,
    HStack,
} from '@/shared/ui/redesigned'
import { getProfileRoute } from '@/shared/consts/router'
import { type TestProps } from '@/shared/types'
import { ToggleFeature, toggleFeature } from '@/shared/lib/featureFlags'

import { type Comment } from '../../model/types/comment'

import styles from './CommentCard.module.scss'

interface CommentCardProps extends TestProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

const CommentCard: FC<CommentCardProps> = memo(props => {
    const { className, comment, isLoading, 'data-testid': dataTestId = 'CommentCard' } = props

    const mods = {
        [styles.loading]: isLoading,
    }

    const additionsClasses = [className]

    const Skeleton = toggleFeature({
        featureFlag: 'isAppRedesigned',
        onDisabled: () => SkeletonDeprecated,
        onEnabled: () => SkeletonRedesigned,
    })

    if (isLoading) {
        return (
            <div
                className={classNames(styles.CommentCard, mods, additionsClasses)}
                data-testid={dataTestId + '.CommentCardLoader'}
            >
                <div className={styles.header}>
                    <Skeleton width="30px" height="30px" borderRadius="50%" />
                    <Skeleton width="100px" height="16px" className={styles.username} />
                </div>
                <Skeleton width="100%" height="50px" className={styles.text} />
            </div>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={
                <div
                    className={classNames(styles.CommentCard, mods, additionsClasses)}
                    data-testid={dataTestId + '.CommentCardItem'}
                >
                    <AppLinkDeprecated
                        to={getProfileRoute(comment.user?.id)}
                        className={styles.header}
                    >
                        {comment.user?.avatar && (
                            <AvatarDeprecated size={30} src={comment.user?.avatar} />
                        )}
                        <TextDeprecated
                            title={comment.user?.username}
                            className={styles.username}
                        />
                    </AppLinkDeprecated>
                    <TextDeprecated text={comment.text} className={styles.text} />
                </div>
            }
            onEnabled={
                <Card
                    className={classNames('', mods, additionsClasses)}
                    data-testid={dataTestId + '.CommentCardItem'}
                    max
                    cardPadding="24"
                >
                    <AppLink to={getProfileRoute(comment.user?.id)}>
                        <HStack gap="4" align="center">
                            {comment.user?.avatar && (
                                <Avatar size={30} src={comment.user?.avatar} />
                            )}
                            <Text text={comment.user?.username} className={styles.username} bold />
                        </HStack>
                    </AppLink>
                    <Text text={comment.text} className={styles.text} bold />
                </Card>
            }
        />
    )
})

export default CommentCard
