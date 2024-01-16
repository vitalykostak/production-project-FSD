import { memo, type ButtonHTMLAttributes, type FC, type ReactNode } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import buttonStyles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    size?: ButtonSize
    square?: boolean
    max?: boolean
    addonLeft?: ReactNode
    addonRight?: ReactNode
}

type ButtonVariant = 'clear' | 'primary' | 'outline' | 'filled'

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
        addonLeft,
        addonRight,
        ...otherButtonProps
    } = props

    const mods = {
        [buttonStyles.square]: square,
        [buttonStyles.disabled]: disabled,
        [buttonStyles.max]: max,
    }

    const additionsClasses = [className, buttonStyles[variant], buttonStyles[size]]

    return (
        <button
            disabled={disabled}
            className={classNames(buttonStyles.Button, mods, additionsClasses)}
            {...otherButtonProps}
        >
            {addonLeft && <div className={buttonStyles.addonLeft}>{addonLeft}</div>}
            {children}
            {addonRight && <div className={buttonStyles.addonRight}>{addonRight}</div>}
        </button>
    )
})

export default Button
