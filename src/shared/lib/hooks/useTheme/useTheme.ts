import { useContext } from 'react'
import {
  ThemeContext
} from '../../context/ThemeContext'
import { LOCAL_STORAGE_UI_THEME_KEY } from '../../../consts/localStorageKeys'
import { Theme } from '../../../consts/theme'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
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
    document.body.className = newTheme
    localStorage.setItem(LOCAL_STORAGE_UI_THEME_KEY, newTheme)
  }

  return { theme: theme as Theme, toggleTheme }
}
