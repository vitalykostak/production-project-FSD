import { getUserAuthData } from 'entities/User'
import { Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData)

  const routes = useMemo(() => Object.values(routeConfig).filter(r => !r.authOnly || isAuth), [isAuth])

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
          key={path}
        />
      ))}
    </Routes>
  )
}

export default AppRouter
