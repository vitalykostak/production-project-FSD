import { useTranslation } from 'react-i18next'
import { Page } from 'shared/ui'

const Main = () => {
  const { t } = useTranslation('main')

  return <Page>{t('main_page')}</Page>
}

export default Main
