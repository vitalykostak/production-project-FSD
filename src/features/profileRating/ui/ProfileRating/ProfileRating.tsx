import { memo, type FC, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Rating } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui'

import {
  useGetProfileRatingQuery,
  useRateProfileMutation
} from '../../api/profileRatingApi/profileRatingApi'

export interface ProfileRatingProps {
  className?: string
  profileId: string
}

const ProfileRating: FC<ProfileRatingProps> = memo((props) => {
  const { className, profileId } = props

  const authData = useSelector(getUserAuthData)
  const userId = authData?.id ?? ''

  const { data, isLoading, refetch } = useGetProfileRatingQuery({ profileId, userId })

  const rating = data?.[0]

  const [rateProfileMutation] = useRateProfileMutation()

  const rateProfileMutationHandler = useCallback(
    (starNumber: number, feedback?: string) => {
      try {
        void rateProfileMutation({
          profileId,
          userId,
          rate: starNumber,
          feedback
        })
      } catch (error) {
        void refetch()
      }
    },
    [rateProfileMutation, profileId, userId, refetch]
  )

  const acceptHandler = useCallback(
    (starNumber: number, feedback?: string) =>
      rateProfileMutationHandler(starNumber, feedback),
    [rateProfileMutationHandler]
  )

  const cancelHandler = useCallback(
    (starNumber: number) => rateProfileMutationHandler(starNumber),
    [rateProfileMutationHandler]
  )

  if (isLoading) {
    return <Skeleton width="100%" height="124px" />
  }

  const mods = {}

  const additionsClasses = [className]

  return (
    <Rating
      onAccept={acceptHandler}
      onCancel={cancelHandler}
      title={'Rate profile'}
      hasFeedback
      feedbackTitle={'Share you thoughts about profile'}
      className={classNames('', mods, additionsClasses)}
      rate={rating?.rate || 0}
    />
  )
})

export default ProfileRating
