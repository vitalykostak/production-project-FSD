import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page'

const NotFound: FC = () => {
  const { t } = useTranslation('not_found')

  return <Page>{t('not_found')}</Page>
}

export default NotFound
