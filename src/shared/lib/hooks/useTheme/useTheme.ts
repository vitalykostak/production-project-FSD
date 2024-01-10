import { useContext } from 'react'

import { ThemeContext } from '../../context/ThemeContext'
import { Theme } from '../../../consts/theme'

interface UseThemeResult {
    theme: Theme
    toggleTheme: ToggleTheme
}

type ToggleTheme = (saveAction: (newTheme: Theme) => void) => void

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme: ToggleTheme = saveAction => {
        let newTheme
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT
                break
            case Theme.LIGHT:
                newTheme = Theme.ORANGE
                break
            case Theme.ORANGE:
                newTheme = Theme.DARK
                break
            default:
                newTheme = Theme.LIGHT
        }
        setTheme?.(newTheme)
        saveAction(newTheme)
    }

    return { theme: theme as Theme, toggleTheme }
}
