import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import buttonStyle from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme = ButtonTheme.PRIMARY,
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
