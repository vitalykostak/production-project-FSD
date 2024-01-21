import { useCallback, type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames/classNames'
import {
    Button as ButtonDeprecated,
    ButtonTheme,
    Input as InputDeprecated,
    Text as TextDeprecated,
    TextTheme,
} from '@/shared/ui/deprecated'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib'
import { useAppDispatch } from '@/shared/lib/hooks'
import { ToggleFeature } from '@/shared/lib/featureFlags'
import { Button, Input, Text } from '@/shared/ui/redesigned'

import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading'

import loginFormStyles from './LoginForm.module.scss'

const dynamicReducers: ReducersList = {
    loginForm: loginReducer,
}

export interface LoginFormProps {
    className?: string
    onSuccessLogin: () => void
}

const LoginForm: FC<LoginFormProps> = memo(props => {
    const { className, onSuccessLogin } = props

    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginLoading)

    const dispatch = useAppDispatch()
    const { t } = useTranslation()

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch],
    )

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch],
    )

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(
            loginByUsername({
                username,
                password,
            }),
        )

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccessLogin()
        }
    }, [dispatch, username, password, onSuccessLogin])

    const additionsClasses = [className]

    return (
        <DynamicModuleLoader reducers={dynamicReducers} shouldRemoveOnUnmout>
            <ToggleFeature
                featureFlag="isAppRedesigned"
                onDisabled={
                    <div className={classNames(loginFormStyles.LoginForm, {}, additionsClasses)}>
                        <TextDeprecated title={t('authorization_form')} />
                        {error && (
                            <TextDeprecated
                                text={t('incorrect_login_credentials')}
                                theme={TextTheme.ERROR}
                            />
                        )}
                        <InputDeprecated
                            placeholder={t('type_username')}
                            type="text"
                            className={loginFormStyles.input}
                            autoFocus
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <InputDeprecated
                            placeholder={t('type_password')}
                            type="text"
                            className={loginFormStyles.input}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <ButtonDeprecated
                            className={loginFormStyles.loginButton}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('sign_in')}
                        </ButtonDeprecated>
                    </div>
                }
                onEnabled={
                    <div className={classNames(loginFormStyles.LoginForm, {}, additionsClasses)}>
                        <Text title={t('authorization_form')} />
                        {error && <Text text={t('incorrect_login_credentials')} variant="error" />}
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
                            variant="outline"
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('sign_in')}
                        </Button>
                    </div>
                }
            />
        </DynamicModuleLoader>
    )
})

export default LoginForm
