import { useTranslation } from 'react-i18next'
import { Page } from 'shared/ui'

const About = () => {
  const { t } = useTranslation('about')

  return <Page>{t('about_page')}</Page>
}

export default About
