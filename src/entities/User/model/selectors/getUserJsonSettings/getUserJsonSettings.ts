import { buildSelector } from '@/shared/lib/store'

import { type UserJsonSettings } from '../../types/user'

const defaultUserSettings: UserJsonSettings = {}

export const [useUserJsonSettings, getUserJsonSettings] = buildSelector(
    state => state.user?.authData?.jsonSettings || defaultUserSettings,
)
