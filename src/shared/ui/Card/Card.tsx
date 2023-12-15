import { type FC, type HTMLAttributes, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
  theme?: CardTheme
}

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINE = 'outline'
}

const Card: FC<CardProps> = (props) => {
  const { className, children, theme = CardTheme.NORMAL, ...otherDivProps } = props

  const mods = {}

  const additionsClasses = [className, styles[theme]]

  return (
    <div className={classNames(styles.Card, mods, additionsClasses)} {...otherDivProps}>
      {children}
    </div>
  )
}

export default Card
