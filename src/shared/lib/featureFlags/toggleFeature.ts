import { type FeatureFlags } from '@/shared/types'

import { getFeatureFlag } from './featureFlagsManager'

interface ToggleFeatureOptions<T> {
    featureFlag: keyof FeatureFlags
    onEnabled: () => T
    onDisabled: () => T
}

export const toggleFeature = <T>(options: ToggleFeatureOptions<T>) => {
    const { featureFlag, onEnabled, onDisabled } = options

    const isEnabled = getFeatureFlag(featureFlag)

    return isEnabled ? onEnabled() : onDisabled()
}
