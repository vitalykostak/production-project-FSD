import { classNames } from 'shared/lib/classNames'
import { useTheme } from './providers/ThemeProvider'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from './providers/router'
import { Suspense, type FC } from 'react'

const App: FC = () => {
  const { theme } = useTheme()

  return (
    <Suspense fallback={<p>Loading</p>}>
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  )
}

export default App
