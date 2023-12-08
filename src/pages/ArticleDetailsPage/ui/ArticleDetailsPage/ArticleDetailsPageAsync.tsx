import { lazy } from 'react'

export default lazy(
  async () =>
    new Promise((resolve) =>
      setTimeout(resolve, 1000)).then(async () => import('./ArticleDetailsPage'))

)
