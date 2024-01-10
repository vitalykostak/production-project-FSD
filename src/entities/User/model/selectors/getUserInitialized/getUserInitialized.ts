import { buildSelector } from '@/shared/lib/store'

export const [useUserInitialized, getUserInitialized] = buildSelector(
    state => state.user?._initialized,
)
