import { lazy } from 'react'

export default lazy(
  async () =>
    await new Promise((resolve) => setTimeout(resolve, 2000)).then(
      async () => await import('./About')
    )
)
