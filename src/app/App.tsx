import { Suspense, type FC, useEffect } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { initAuthData, useUserInitialized } from '@/entities/User'
import { PageLoader } from '@/widgets/PageLoader'
import { useAppDispatch } from '@/shared/lib/hooks'
import { ToggleFeature } from '@/shared/lib/featureFlags'
import { MainLayout } from '@/shared/layouts'
import { APP_HTML_ELEMENT_ID } from '@/shared/consts/app'

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
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={
                <div id={APP_HTML_ELEMENT_ID} className={classNames('app', {})}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            }
            onEnabled={
                <div id={APP_HTML_ELEMENT_ID} className={classNames('app_redesigned', {})}>
                    <Suspense fallback="">
                        <MainLayout
                            sidebar={<Sidebar />}
                            content={<AppRouter />}
                            header={<Navbar />}
                            // toolbar={<div>Toolbar</div>}
                        />
                    </Suspense>
                </div>
            }
        />
    )
}

export default App
