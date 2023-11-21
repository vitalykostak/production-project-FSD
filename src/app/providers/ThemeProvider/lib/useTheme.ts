import { useContext } from 'react'
import {
  LOCAL_STORAGE_UI_THEME_KEY,
  Theme,
  ThemeContext
} from './ThemeContext'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const value = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(value)
    localStorage.setItem(LOCAL_STORAGE_UI_THEME_KEY, value)
  }

  return { theme, toggleTheme }
}

export default useTheme
