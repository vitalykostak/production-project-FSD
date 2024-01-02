import React, { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'

import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import Button, { ButtonTheme } from '@/shared/ui/Button/Button'
import { useTheme } from '@/shared/lib/hooks'
import { Theme } from '@/shared/consts/theme'

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = memo((props) => {
  const { className } = props

  const { toggleTheme, theme } = useTheme()

  const iconsThemeMap: Record<Theme, React.ReactNode> = {
    [Theme.DARK]: <DarkIcon color="#0115C6" />,
    [Theme.LIGHT]: <LightIcon color="#FFC700" />,
    [Theme.ORANGE]: <LightIcon color="#FFC700" />
  }

  return (
    <Button
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
    >
      {iconsThemeMap[theme]}
    </Button>
  )
})

export default ThemeSwitcher
