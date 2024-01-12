import React, { memo, type FC } from 'react'
import { useCallback } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import LightIconDeprecated from '@/shared/assets/icons/theme-light.svg'
import DarkIconDeprecated from '@/shared/assets/icons/theme-dark.svg'
import ThemeIcon from '@/shared/assets/icons/theme.svg'
import { useAppDispatch, useTheme } from '@/shared/lib/hooks'
import { Theme } from '@/shared/consts/theme'
import { LOCAL_STORAGE_UI_THEME_KEY } from '@/shared/consts/localStorageKeys'
import { updateUserJsonSetting } from '@/entities/User'
import { ToggleFeature } from '@/shared/lib/featureFlags'
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated'
import { Icon } from '@/shared/ui/redesigned'

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(props => {
    const { className } = props

    const dispatch = useAppDispatch()
    const { toggleTheme, theme } = useTheme()

    const toggleThemeHandler = useCallback(() => {
        const toggleThemeSaveAction = (newTheme: Theme) => {
            localStorage.setItem(LOCAL_STORAGE_UI_THEME_KEY, newTheme)
            void dispatch(updateUserJsonSetting({ uiTheme: newTheme }))
        }

        toggleTheme(toggleThemeSaveAction)
    }, [toggleTheme, dispatch])

    const iconsThemeMap: Record<Theme, React.ReactNode> = {
        [Theme.DARK]: <DarkIconDeprecated color="#0115C6" />,
        [Theme.LIGHT]: <LightIconDeprecated color="#FFC700" />,
        [Theme.ORANGE]: <LightIconDeprecated color="#FFC700" />,
    }

    return (
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={
                <ButtonDeprecated
                    onClick={toggleThemeHandler}
                    className={classNames('', {}, [className])}
                    theme={ButtonTheme.CLEAR}
                >
                    {iconsThemeMap[theme]}
                </ButtonDeprecated>
            }
            onEnabled={
                <Icon
                    Svg={ThemeIcon}
                    className={classNames('', {}, [className])}
                    clickable
                    onClick={toggleThemeHandler}
                />
            }
        />
    )
})

export default ThemeSwitcher
