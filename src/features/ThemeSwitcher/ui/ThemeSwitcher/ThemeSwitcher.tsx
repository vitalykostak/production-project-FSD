import React, { memo, type FC } from 'react'
import { useCallback } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import Button, { ButtonTheme } from '@/shared/ui/deprecated/Button/Button'
import { useAppDispatch, useTheme } from '@/shared/lib/hooks'
import { Theme } from '@/shared/consts/theme'
import { LOCAL_STORAGE_UI_THEME_KEY } from '@/shared/consts/localStorageKeys'
import { updateUserJsonSetting } from '@/entities/User'

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
        [Theme.DARK]: <DarkIcon color="#0115C6" />,
        [Theme.LIGHT]: <LightIcon color="#FFC700" />,
        [Theme.ORANGE]: <LightIcon color="#FFC700" />,
    }

    return (
        <Button
            onClick={toggleThemeHandler}
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {iconsThemeMap[theme]}
        </Button>
    )
})

export default ThemeSwitcher
