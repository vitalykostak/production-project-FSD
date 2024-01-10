import { type FeatureFlags } from '@/shared/types'
import { type Theme } from '@/shared/consts/theme'

import { type UserRole } from '../consts'

export interface UserSchema {
    _initialized: boolean
    authData?: User
}

export interface User {
    id: string
    username: string
    avatar?: string
    roles?: UserRole[]
    features?: FeatureFlags
    jsonSettings?: UserJsonSettings
}

export interface UserJsonSettings {
    uiTheme?: Theme
}
