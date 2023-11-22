import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from './providers/router'
import { Suspense, type FC } from 'react'
import { useTranslation } from 'react-i18next'

const App: FC = () => {
  const { t } = useTranslation()

  const { theme } = useTheme()

  return (
    <Suspense fallback={<p>{t('loading')}</p>}>
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
