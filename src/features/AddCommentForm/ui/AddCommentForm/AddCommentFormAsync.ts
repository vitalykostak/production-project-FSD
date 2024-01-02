import { type FC, lazy } from 'react'

import { type AddCommentFormProps } from './AddCommentForm'

export default lazy<FC<AddCommentFormProps>>(async () =>
  await new Promise((resolve) => setTimeout(resolve, 1000)).then(
    async () => await import('./AddCommentForm')
  )
)
