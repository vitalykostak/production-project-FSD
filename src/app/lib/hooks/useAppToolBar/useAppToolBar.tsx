import { type ReactNode } from 'react'

import { AppRoutes } from '@/shared/consts/router'
import { useCurrentAppRoute } from '@/shared/lib/hooks'
import { ScrollToTopBar } from '@/widgets/ScrollToTopBar'

export const useAppToolBar = () => {
    const currentAppRoute = useCurrentAppRoute()

    if (!currentAppRoute) {
        return undefined
    }

    const appToolbarMap: Partial<Record<AppRoutes, ReactNode>> = {
        [AppRoutes.ARTICLES]: <ScrollToTopBar />,
        [AppRoutes.ARTICLES_DETAILS]: <ScrollToTopBar />,
    }

    if (currentAppRoute) {
        return appToolbarMap[currentAppRoute]
    }
}
