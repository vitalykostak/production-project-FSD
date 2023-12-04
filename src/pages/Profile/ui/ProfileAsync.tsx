import { lazy } from 'react'

export default lazy(
  async () =>
    await new Promise((resolve) => setTimeout(resolve, 1000)).then(
      async () => await import('./Profile')
    )
)
