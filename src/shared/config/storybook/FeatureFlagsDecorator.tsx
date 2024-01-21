import { type StoryFn } from '@storybook/react'

import { type FeatureFlags } from '@/shared/types'
import { setFeatureFlags } from '@/shared/lib/featureFlags'

const FeatureFlagsDecorator = (ff: Partial<FeatureFlags>) => {
    setFeatureFlags(ff as FeatureFlags)

    const Decorator = (Story: StoryFn) => <Story />

    return Decorator
}

export default FeatureFlagsDecorator
