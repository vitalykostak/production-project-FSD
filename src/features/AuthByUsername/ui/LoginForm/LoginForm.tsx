import { useCallback, type FC, memo } from 'react'
import loginFormStyles from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme, Input, Text, TextTheme } from 'shared/ui'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginForm } from '../../model/selectors/getLoginForm'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'

interface LoginFormProps {
  className?: string
}

const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { className } = props

  const loginFormValues = useSelector(getLoginForm)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(() => {
    dispatch(
      loginByUsername({
        username: loginFormValues.username,
        password: loginFormValues.password
      })
    )
  }, [dispatch, loginFormValues])

  const additionalsClasses = [className]
  return (
    <div
      className={classNames(loginFormStyles.LoginForm, {}, additionalsClasses)}
    >
      <Text title={t('authorization_form')} />
      {loginFormValues?.error && <Text text={(t('incorrect_login_credentials'))} theme={TextTheme.ERROR} />}
      <Input
        placeholder={t('type_username')}
        type="text"
        className={loginFormStyles.input}
        autoFocus
        onChange={onChangeUsername}
        value={loginFormValues.username}
      />
      <Input
        placeholder={t('type_password')}
        type="text"
        className={loginFormStyles.input}
        onChange={onChangePassword}
        value={loginFormValues.password}
      />
      <Button
        className={loginFormStyles.loginButton}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={loginFormValues.isLoading}
      >
        {t('sign_in')}
      </Button>
    </div>
  )
})

export default LoginForm
