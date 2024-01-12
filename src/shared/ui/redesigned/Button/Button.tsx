import { memo, type ButtonHTMLAttributes, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import buttonStyle from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    size?: ButtonSize
    square?: boolean
    max?: boolean
}

type ButtonVariant = 'clear' | 'primary' | 'outline'

type ButtonSize = 'm' | 'l' | 'xl'

const Button: FC<ButtonProps> = memo(props => {
    const {
        children,
        className,
        variant = 'primary',
        size = 'm',
        square = false,
        disabled,
        max,
        ...otherButtonProps
    } = props

    const mods = {
        [buttonStyle.square]: square,
        [buttonStyle.disabled]: disabled,
        [buttonStyle.max]: max,
    }

    const additionsClasses = [className, buttonStyle[variant], buttonStyle[size]]

    return (
        <button
            disabled={disabled}
            className={classNames(buttonStyle.Button, mods, additionsClasses)}
            {...otherButtonProps}
        >
            {children}
        </button>
    )
})

export default Button
