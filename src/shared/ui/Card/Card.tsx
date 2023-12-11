import { type FC, type HTMLAttributes, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
}

const Card: FC<CardProps> = (props) => {
  const { className, children, ...otherDivProps } = props

  const mods = {}

  const additionsClasses = [className]

  return (
    <div className={classNames(styles.Card, mods, additionsClasses)} {...otherDivProps}>
      {children}
    </div>
  )
}

export default Card
