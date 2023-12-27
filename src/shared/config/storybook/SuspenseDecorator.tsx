import { type StoryFn } from '@storybook/react'
import { Suspense } from 'react'

const SuspenseDecorator = (Story: StoryFn) => (
  <Suspense>
    <Story />
  </Suspense>
)

export default SuspenseDecorator
