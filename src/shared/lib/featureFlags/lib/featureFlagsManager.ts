import { LOCAL_STORAGE_UI_VERSION } from '@/shared/consts/localStorageKeys'
import { UiInterfaceVersion } from '@/shared/types'

import { type FeatureFlags } from '../../../types/featureFlags'

const defaultFeatureFlags: Partial<FeatureFlags> = {
    isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_UI_VERSION) === UiInterfaceVersion.LATEST,
}

let featureFlags: Partial<FeatureFlags> = {
    ...defaultFeatureFlags,
}

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

export const getAllFeatureFlags = () => featureFlags
