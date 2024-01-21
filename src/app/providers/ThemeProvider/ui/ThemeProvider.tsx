import { type FC, useMemo, useState, useEffect } from 'react'

import { ThemeContext } from '@/shared/lib/context/ThemeContext'
import { LOCAL_STORAGE_UI_THEME_KEY } from '@/shared/consts/localStorageKeys'
import { Theme } from '@/shared/consts/theme'

interface Props {
    children: React.ReactNode
    initialTheme?: Theme
}

const storedTheme = localStorage?.getItem(LOCAL_STORAGE_UI_THEME_KEY) as Theme
const isStoredThemeValid = Object.values(Theme).includes(storedTheme)

const fallbackTheme = isStoredThemeValid ? storedTheme : Theme.LIGHT

const ThemeProvider: FC<Props> = props => {
    const { children, initialTheme } = props

    const [theme, setTheme] = useState<Theme>(initialTheme || fallbackTheme)
    const [isThemeInitialized, setThemeInitialized] = useState<boolean>(false)

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme])

    useEffect(() => {
        if (isThemeInitialized) {
            return
        }

        if (initialTheme) {
            const isUserJsonSettingsThemeValid = Object.values(Theme).includes(initialTheme)

            const inferredTheme = isUserJsonSettingsThemeValid ? initialTheme : fallbackTheme
            setTheme(inferredTheme)
            setThemeInitialized(true)
        }
    }, [setTheme, initialTheme, isThemeInitialized])

    useEffect(() => {
        Object.values(Theme).forEach(t => document?.body.classList?.remove(t))
        document.body.classList.add(theme)
    }, [theme])

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
