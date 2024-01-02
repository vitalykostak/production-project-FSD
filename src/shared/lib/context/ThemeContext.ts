import { createContext } from 'react'

import { type Theme } from '@/shared/consts/theme'

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})
