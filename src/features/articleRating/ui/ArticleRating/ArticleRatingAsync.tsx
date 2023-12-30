import { type FC, Suspense, lazy } from 'react'
import { type ArticleRatingProps } from './ArticleRating'
import { Skeleton } from '@/shared/ui'

const ArticleRatingLazy = lazy(async () => import('./ArticleRating'))

const ArticleRatingAsync: FC<ArticleRatingProps> = (props) => (
  <Suspense fallback={<Skeleton width="100%" height="124px" />}>
    <ArticleRatingLazy {...props} />
  </Suspense>
)

export default ArticleRatingAsync
