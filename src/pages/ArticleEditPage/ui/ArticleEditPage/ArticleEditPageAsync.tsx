import { lazy } from 'react'

export default lazy(
  async () =>
    new Promise((resolve) =>
      setTimeout(resolve, 400)).then(async () => import('./ArticleEditPage'))

)
