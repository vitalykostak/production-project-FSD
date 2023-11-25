import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import buttonStyle from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme = ThemeButton.PRIMARY,
    ...otherButtonProps
  } = props

  return (
    <button
      {...otherButtonProps}
      className={classNames(buttonStyle.Button, {}, [
        className,
        buttonStyle[theme]
      ])}
    >
      {children}
    </button>
  )
}

export default Button
