import { type FC, useMemo, useState, useEffect } from 'react'

import { ThemeContext } from '@/shared/lib/context/ThemeContext'
import { LOCAL_STORAGE_UI_THEME_KEY } from '@/shared/consts/localStorageKeys'
import { Theme } from '@/shared/consts/theme'
import { useUserInitialized, useUserJsonSettings } from '@/entities/User'

interface Props {
    children: React.ReactNode
    initialTheme?: Theme
}

const storedTheme = localStorage?.getItem(LOCAL_STORAGE_UI_THEME_KEY) as Theme
const isStoredThemeValid = Object.values(Theme).includes(storedTheme)

const selectedTheme = isStoredThemeValid ? storedTheme : Theme.LIGHT

const ThemeProvider: FC<Props> = props => {
    const { children, initialTheme } = props

    const isUserInitialized = useUserInitialized()
    const userJsonSettings = useUserJsonSettings()

    const [theme, setTheme] = useState<Theme>(initialTheme || selectedTheme)
    const [isThemeInitialized, setThemeInitialized] = useState<boolean>(false)

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme])

    useEffect(() => {
        if (isThemeInitialized) {
            return
        }

        if (isUserInitialized && userJsonSettings?.uiTheme) {
            const isUserJsonSettingsThemeValid = Object.values(Theme).includes(
                userJsonSettings.uiTheme,
            )

            const inferredTheme = isUserJsonSettingsThemeValid
                ? userJsonSettings.uiTheme
                : selectedTheme
            setTheme(inferredTheme)
            setThemeInitialized(true)
        }
    }, [setTheme, isUserInitialized, userJsonSettings.uiTheme, isThemeInitialized])

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
