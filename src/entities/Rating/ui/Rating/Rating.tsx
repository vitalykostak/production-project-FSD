import { memo, type FC, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserView, MobileView } from 'react-device-detect'

import { classNames } from '@/shared/lib/classNames/classNames'
import {
    Text as TextDeprecated,
    Button as ButtonDeprecated,
    Input as InputDeprecated,
    Card as CardDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated'
import {
    HStack,
    VStack,
    Drawer,
    Modal,
    Text,
    Button,
    Card,
    StarRating,
} from '@/shared/ui/redesigned'
import { ToggleFeature } from '@/shared/lib/featureFlags'

import styles from './Rating.module.scss'

interface RatingProps {
    title: string
    feedbackTitle?: string
    hasFeedback?: boolean
    className?: string
    onAccept?: (starNumber: number, feedback?: string) => void
    onCancel?: (starNumber: number) => void
    rate?: number
}

const Rating: FC<RatingProps> = memo(props => {
    const { className, title, hasFeedback, onAccept, onCancel, feedbackTitle, rate } = props

    const { t } = useTranslation(['translation'])

    const [selectedStars, setSelectedStars] = useState<number>(rate || 0)
    const [feedback, setFeedback] = useState<string>('')
    const [isOpenModal, setOpenModal] = useState<boolean>(false)

    const starSelectHandler = useCallback(
        (starNumber: number) => {
            setSelectedStars(starNumber)

            if (!hasFeedback) {
                return onAccept?.(starNumber)
            }

            setOpenModal(true)
        },
        [hasFeedback, onAccept],
    )

    const onSendFeedback = useCallback(() => {
        setOpenModal(false)
        onAccept?.(selectedStars, feedback)
    }, [onAccept, selectedStars, feedback])

    const onCancelFeedback = useCallback(() => {
        onCancel?.(selectedStars)
        setOpenModal(false)
    }, [onCancel, selectedStars])

    const modalContent = (
        <>
            {feedbackTitle && (
                <ToggleFeature
                    featureFlag="isAppRedesigned"
                    onDisabled={<TextDeprecated title={feedbackTitle} />}
                    onEnabled={<Text title={feedbackTitle} />}
                />
            )}
            <InputDeprecated placeholder="feedback" value={feedback} onChange={setFeedback} />
        </>
    )

    const mods = {}

    const additionsClasses = [className]

    const content = (
        <>
            <VStack gap="16" align="center">
                <ToggleFeature
                    featureFlag="isAppRedesigned"
                    onDisabled={<TextDeprecated title={title} />}
                    onEnabled={<Text title={title} />}
                />
                <StarRating onSelect={starSelectHandler} selected={selectedStars} />
                <BrowserView>
                    <Modal lazy isOpen={isOpenModal}>
                        <VStack gap="16" max>
                            {modalContent}
                            <ToggleFeature
                                featureFlag="isAppRedesigned"
                                onDisabled={
                                    <HStack justify="end" max gap="12">
                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE_RED}
                                            onClick={onCancelFeedback}
                                        >
                                            {t('translation:cancel')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE}
                                            onClick={onSendFeedback}
                                            disabled={!feedback}
                                        >
                                            {t('translation:send')}
                                        </ButtonDeprecated>
                                    </HStack>
                                }
                                onEnabled={
                                    <HStack justify="end" max gap="12">
                                        <Button variant="outline" onClick={onCancelFeedback}>
                                            {t('translation:cancel')}
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={onSendFeedback}
                                            disabled={!feedback}
                                        >
                                            {t('translation:send')}
                                        </Button>
                                    </HStack>
                                }
                            />
                        </VStack>
                    </Modal>
                </BrowserView>
                <MobileView>
                    <Drawer
                        isOpen={isOpenModal}
                        onClose={onCancelFeedback}
                        className={styles.drawer}
                    >
                        <VStack gap="16" max>
                            {modalContent}
                            <ToggleFeature
                                featureFlag="isAppRedesigned"
                                onDisabled={
                                    <ButtonDeprecated
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onSendFeedback}
                                        disabled={!feedback}
                                        max
                                    >
                                        {t('translation:send')}
                                    </ButtonDeprecated>
                                }
                                onEnabled={
                                    <Button
                                        variant="outline"
                                        onClick={onSendFeedback}
                                        disabled={!feedback}
                                        max
                                    >
                                        {t('translation:send')}
                                    </Button>
                                }
                            />
                        </VStack>
                    </Drawer>
                </MobileView>
            </VStack>
        </>
    )

    return (
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={
                <CardDeprecated className={classNames(styles.Rating, mods, additionsClasses)} max>
                    {content}
                </CardDeprecated>
            }
            onEnabled={
                <Card
                    max
                    cardPadding="24"
                    cardBorder="borderRound"
                    className={classNames(styles.Rating, mods, additionsClasses)}
                >
                    {content}
                </Card>
            }
        />
    )
})

export default Rating
