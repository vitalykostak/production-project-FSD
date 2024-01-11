import { type FeatureFlags } from '../../types/featureFlags'

let featureFlags: FeatureFlags

export const setFeatureFlags = (ff?: FeatureFlags) => {
    if (ff) {
        featureFlags = ff
    }
}

export const getFeatureFlag = (flag: keyof FeatureFlags) => {
    // if (!featureFlags) {
    //     throw new Error('Feature flags not set. Call setFeatureFlags before using getFeatureFlag.')
    // }

    return featureFlags?.[flag]
}
