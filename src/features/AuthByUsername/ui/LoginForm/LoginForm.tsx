import { useCallback, type FC, memo } from 'react'
import loginFormStyles from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme, Input, Text, TextTheme } from 'shared/ui'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginUsername } from '../../model/selectors/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError'
import { getLoginLoading } from '../../model/selectors/getLoginLoading'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib'

const dynamicReducers: ReducersList = {
  loginForm: loginReducer
}

export interface LoginFormProps {
  className?: string
}

const LoginForm: FC<LoginFormProps> = memo((props) => {
  const { className } = props

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const error = useSelector(getLoginError)
  const isLoading = useSelector(getLoginLoading)

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
        username,
        password
      })
    )
  }, [dispatch, username, password])

  const additionalsClasses = [className]

  return (
    <DynamicModuleLoader reducers={dynamicReducers} shouldRemoveOnUnmout>
      <div
        className={classNames(
          loginFormStyles.LoginForm,
          {},
          additionalsClasses
        )}
      >
        <Text title={t('authorization_form')} />
        {error && (
          <Text
            text={t('incorrect_login_credentials')}
            theme={TextTheme.ERROR}
          />
        )}
        <Input
          placeholder={t('type_username')}
          type="text"
          className={loginFormStyles.input}
          autoFocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          placeholder={t('type_password')}
          type="text"
          className={loginFormStyles.input}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={loginFormStyles.loginButton}
          theme={ButtonTheme.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('sign_in')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
