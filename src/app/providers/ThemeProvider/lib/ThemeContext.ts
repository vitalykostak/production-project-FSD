import { createContext } from 'react'

export enum Theme {
  LIGHT = 'app_light_ui_theme',
  DARK = 'app_dark_ui_theme',
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_UI_THEME_KEY = 'ui_theme'
