import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/'
import { useTheme, Theme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props

  const { toggleTheme, theme } = useTheme()

  const iconsThemeMap: Record<Theme, React.ReactNode> = {
    [Theme.DARK]: <DarkIcon color="#0115C6" />,
    [Theme.LIGHT]: <LightIcon color="#FFC700" />
  }

  return (
    <Button
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
    >
      {iconsThemeMap[theme]}
    </Button>
  )
}

export default ThemeSwitcher
