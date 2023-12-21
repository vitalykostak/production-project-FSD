import { type FC, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Flex.module.scss'

export interface FlexProps {
  className?: string
  children: ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction: FlexDirection
  gap?: Gap
  max?: boolean
}

type FlexJustify = 'start' | 'end' | 'center' | 'between'
type FlexAlign = 'start' | 'end' | 'center'
type FlexDirection = 'row' | 'column'
type Gap = '4' | '8' | '12' | '16'

const justifyClassesMapping: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  end: styles.justifyEnd,
  center: styles.justifyCenter,
  between: styles.justifyBetween
}

const alignClassesMapping: Record<FlexAlign, string> = {
  start: styles.alignStart,
  end: styles.alignEnd,
  center: styles.alignCenter
}

const directionClassesMapping: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn
}

const gapClassesMapping: Record<Gap, string> = {
  4: styles.gap4,
  8: styles.gap8,
  12: styles.gap12,
  16: styles.gap16
}

const Flex: FC<FlexProps> = (props) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'start',
    direction = 'row',
    gap,
    max = false
  } = props

  const mods = {
    [styles.max]: max
  }

  const additionsClasses = [
    className,
    justifyClassesMapping[justify],
    alignClassesMapping[align],
    directionClassesMapping[direction],
    gap && gapClassesMapping[gap]
  ]

  return (
    <div className={classNames(styles.Flex, mods, additionsClasses)}>
      {children}
    </div>
  )
}

export default Flex
