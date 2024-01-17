import { type FC, type ReactNode } from 'react'

import { type FeatureFlags } from '@/shared/types'

import { getFeatureFlag } from '../../lib/featureFlagsManager'

interface ToggleFeatureProps {
    featureFlag: keyof FeatureFlags
    onEnabled: ReactNode
    onDisabled: ReactNode
}

const ToggleFeature: FC<ToggleFeatureProps> = props => {
    const { featureFlag, onEnabled, onDisabled } = props

    const isEnabled = getFeatureFlag(featureFlag)

    return isEnabled ? onEnabled : onDisabled
}

export default ToggleFeature
