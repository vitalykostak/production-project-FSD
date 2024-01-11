import { type FC, type HTMLAttributes, type ReactNode } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode
    theme?: CardTheme
    max?: boolean
}

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINE = 'outline',
}

/**
 * @deprecated
 */
const Card: FC<CardProps> = props => {
    const { className, children, max, theme = CardTheme.NORMAL, ...otherDivProps } = props

    const mods = { [styles.max]: max }

    const additionsClasses = [className, styles[theme]]

    return (
        <div className={classNames(styles.Card, mods, additionsClasses)} {...otherDivProps}>
            {children}
        </div>
    )
}

export default Card
