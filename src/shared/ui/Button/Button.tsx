import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import buttonStyle from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  size?: ButtonSize
  square?: boolean
}

export enum ButtonTheme {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme = ButtonTheme.PRIMARY,
    size = ButtonSize.M,
    square = false,
    ...otherButtonProps
  } = props

  const mods = {
    [buttonStyle.square]: square
  }

  const additionalsClasses = [className, buttonStyle[theme], buttonStyle[size]]

  return (
    <button
      {...otherButtonProps}
      className={classNames(buttonStyle.Button, mods, additionalsClasses)}
    >
      {children}
    </button>
  )
}

export default Button
