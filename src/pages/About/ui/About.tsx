import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation('about')

  return <div>{t('about_page')}</div>
}

export default About
