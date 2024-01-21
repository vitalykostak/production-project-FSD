import { matchPath, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { type AppRoutes, routeEnumMapByPath } from '@/shared/consts/router'

export const useCurrentAppRoute = () => {
    const location = useLocation()

    const [currentAppRoute, setCurrentAppRoute] = useState<AppRoutes>()

    useEffect(() => {
        for (const [pattern, appRoute] of Object.entries(routeEnumMapByPath)) {
            const match = matchPath(pattern, location.pathname)

            if (match) {
                setCurrentAppRoute(appRoute)
            }
        }
    }, [location])

    return currentAppRoute
}
