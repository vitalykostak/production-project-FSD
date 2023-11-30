import { type FC } from 'react'
import loginFormStyles from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, Input } from 'shared/ui'

interface LoginFormProps {
  className?: string
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props

  const { t } = useTranslation()

  const additionalsClasses = [className]
  return (
    <div
      className={classNames(loginFormStyles.LoginForm, {}, additionalsClasses)}
    >
      <Input placeholder={t('type_username')} type="text" className={loginFormStyles.input} autoFocus />
      <Input placeholder={t('type_password')} type="text" className={loginFormStyles.input} />
      <Button className={loginFormStyles.loginButton}>{t('sign_in')}</Button>
    </div>
  )
}

export default LoginForm
