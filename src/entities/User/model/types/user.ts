import { type FeatureFlags } from '@/shared/types'

import { type UserRole } from '../consts'

export interface User {
    id: string
    username: string
    avatar?: string
    roles?: UserRole[]
    features?: FeatureFlags
}

export interface UserSchema {
    _initialized: boolean
    authData?: User
}
