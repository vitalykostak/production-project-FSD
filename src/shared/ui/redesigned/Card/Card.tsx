import { type FC, type HTMLAttributes, type ReactNode } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode
    variant?: CardTheme
    max?: boolean
    cardPadding?: CardPadding
}

type CardTheme = 'normal' | 'outline'

type CardPadding = '0' | '8' | '16' | '24'

const cardPaddingClassMapper: Record<CardPadding, string> = {
    0: styles.padding0,
    8: styles.padding8,
    16: styles.padding16,
    24: styles.padding24,
}

const Card: FC<CardProps> = props => {
    const {
        className,
        children,
        max,
        variant = 'normal',
        cardPadding = '8',
        ...otherDivProps
    } = props

    const mods = { [styles.max]: max }

    const additionsClasses = [className, styles[variant], cardPaddingClassMapper[cardPadding]]

    return (
        <div className={classNames(styles.Card, mods, additionsClasses)} {...otherDivProps}>
            {children}
        </div>
    )
}

export default Card
