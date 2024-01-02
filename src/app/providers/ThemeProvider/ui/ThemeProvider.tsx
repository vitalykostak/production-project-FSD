import { type FC, useMemo, useState } from 'react'
import {
  ThemeContext
} from '@/shared/lib/context/ThemeContext'
import { LOCAL_STORAGE_UI_THEME_KEY } from '@/shared/consts/localStorageKeys'
import { Theme } from '@/shared/consts/theme'

interface Props {
  children: React.ReactNode
  initialTheme?: Theme
}

const storedTheme = (localStorage?.getItem(LOCAL_STORAGE_UI_THEME_KEY) as Theme)
const isStoredThemeValid = Object.values(Theme).includes(storedTheme)

const selectedTheme =
isStoredThemeValid ? storedTheme : Theme.LIGHT

document.body.className = selectedTheme

const ThemeProvider: FC<Props> = (props) => {
  const { children, initialTheme } = props

  const [theme, setTheme] = useState<Theme>(initialTheme || selectedTheme)

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
