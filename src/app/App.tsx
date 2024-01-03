import { Suspense, type FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { getUserInitialized, useUserActions } from '@/entities/User'

import { AppRouter } from './providers/router'

const App: FC = () => {
  // True after checking if user is authorized
  const isUserInitialized = useSelector(getUserInitialized)
  const { initAuthData } = useUserActions()

  useEffect(() => {
    initAuthData()
  }, [initAuthData])

  return (
    <div className={classNames('app', {})}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {isUserInitialized && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}

export default App
