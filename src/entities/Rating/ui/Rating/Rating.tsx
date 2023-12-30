import { memo, type FC, useState, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Rating.module.scss'
import {
  Modal,
  StarRating,
  Text,
  VStack,
  HStack,
  Button,
  Input,
  Card,
  ButtonTheme,
  Drawer
} from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import { BrowserView, MobileView } from 'react-device-detect'

interface RatingProps {
  title: string
  feedbackTitle?: string
  hasFeedback?: boolean
  className?: string
  onAccept?: (starNumber: number, feedback?: string) => void
  onCancel?: (starNumber: number) => void
  rate?: number
}

const Rating: FC<RatingProps> = memo((props) => {
  const {
    className,
    title,
    hasFeedback,
    onAccept,
    onCancel,
    feedbackTitle,
    rate
  } = props

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
    [hasFeedback, onAccept]
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
      {feedbackTitle && <Text title={feedbackTitle} />}
      <Input placeholder="feedback" value={feedback} onChange={setFeedback} />
    </>
  )

  const mods = {}

  const additionsClasses = [className]

  return (
    <Card className={classNames(styles.Rating, mods, additionsClasses)} max>
      <VStack gap="16" align="center">
        <Text title={title} />
        <StarRating onSelect={starSelectHandler} selected={selectedStars} />
        <BrowserView>
          <Modal lazy isOpen={isOpenModal}>
            <VStack gap="16" max>
              {modalContent}
              <HStack justify="end" max gap="12">
                <Button
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCancelFeedback}
                >
                  {t('translation:cancel')}
                </Button>
                <Button
                  theme={ButtonTheme.OUTLINE}
                  onClick={onSendFeedback}
                  disabled={!feedback}
                >
                  {t('translation:send')}
                </Button>
              </HStack>
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
              <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onSendFeedback}
                disabled={!feedback}
                max
              >
                {t('translation:send')}
              </Button>
            </VStack>
          </Drawer>
        </MobileView>
      </VStack>
    </Card>
  )
})

export default Rating
