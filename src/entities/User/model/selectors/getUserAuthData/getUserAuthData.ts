import { buildSelector } from '@/shared/lib/store'

export const [useUseAuthData, getUserAuthData] = buildSelector(state => state.user.authData)
