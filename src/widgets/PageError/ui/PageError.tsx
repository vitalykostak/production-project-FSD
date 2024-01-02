import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui'

import pageErrorStyles from './PageError.module.scss'

// TODO Theme variables styles are not handling

const PageError = () => {
  const { t } = useTranslation('page_error')

  const reload = () => location.reload()

  return (
    <div className={classNames(pageErrorStyles.PageError, {})}>
      <div className={classNames(pageErrorStyles.title)}>
        {t('error_message')}
      </div>
      <Button onClick={reload}>{t('reload')}</Button>
    </div>
  )
}

export default PageError
