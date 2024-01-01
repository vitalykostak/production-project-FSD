import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  routeConfig
} from '@/app/providers/router/config/routeConfig'
import { PageLoader } from '@/widgets/PageLoader'
import RequireAuth from './RequireAuth'
import RequireRoles from './RequireRoles'
import { type AppRouteProps } from '@/shared/types/router'

const AppRouter = () => {
  const renderRoute = (route: AppRouteProps) => {
    const { path, element, authOnly, roles } = route

    const renderedElement = (
      <Suspense fallback={<PageLoader />}>{element}</Suspense>
    )

    return (
      <Route
        path={path}
        element={
          authOnly
            ? (
            <RequireAuth>
              <RequireRoles requiredRoles={roles}>
                {renderedElement}
              </RequireRoles>
            </RequireAuth>
              )
            : (
                renderedElement
              )
        }
        key={path}
      />
    )
  }

  return (
    <Routes>
      {Object.values(routeConfig).map((route) => renderRoute(route))}
    </Routes>
  )
}

export default AppRouter
