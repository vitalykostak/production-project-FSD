import { type FC, Suspense, lazy } from 'react'

import { Skeleton } from '@/shared/ui'

import { type ProfileRatingProps } from './ProfileRating'

const ProfileRatingLazy = lazy(async () => import('./ProfileRating'))

const ProfileRatingAsync: FC<ProfileRatingProps> = (props) => (
  <Suspense fallback={<Skeleton width="100%" height="124px" />}>
    <ProfileRatingLazy {...props} />
  </Suspense>
)

export default ProfileRatingAsync
