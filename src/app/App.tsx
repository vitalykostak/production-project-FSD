import { Suspense, type FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { useAppDispatch } from '@/shared/lib/hooks'
import { getUserInitialized, userActions } from '@/entities/User'

import { AppRouter } from './providers/router'

const App: FC = () => {
  const dispatch = useAppDispatch()

  // True after checking if user is authorized
  const isUserInitialized = useSelector(getUserInitialized)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

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
