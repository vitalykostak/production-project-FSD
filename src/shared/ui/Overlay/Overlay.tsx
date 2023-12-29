import { type HTMLAttributes, type FC, type ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './Overlay.module.scss'

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
}

const Overlay: FC<OverlayProps> = (props) => {
  const { className, children, ...otherDivProps } = props

  const mods = {}

  const additionsClasses = [className]

  return (
    <div className={classNames(styles.Overlay, mods, additionsClasses)} {...otherDivProps}>
      {children}
    </div>
  )
}

export default Overlay
