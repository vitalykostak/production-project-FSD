import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

const NotFound: FC = () => {
  const { t } = useTranslation('not_found')

  return <div>{t('not_found')}</div>
}

export default NotFound
