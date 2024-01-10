import { Suspense, type FC, useEffect } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { initAuthData, useUserInitialized } from '@/entities/User'
import { PageLoader } from '@/widgets/PageLoader'
import { useAppDispatch } from '@/shared/lib/hooks'

import { AppRouter } from './providers/router'

const App: FC = () => {
    const dispatch = useAppDispatch()

    // True after checking if user is authorized
    const isUserInitialized = useUserInitialized()

    useEffect(() => {
        void dispatch(initAuthData())
    }, [dispatch])

    if (!isUserInitialized) {
        return <PageLoader />
    }

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
