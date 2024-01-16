import { memo, type FC, type ReactNode } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './StickyLayout.module.scss'

interface StickyLayoutProps {
    className?: string
    left?: ReactNode
    content: ReactNode
    right?: ReactNode
}

const StickyLayout: FC<StickyLayoutProps> = memo(props => {
    const { className, left, content, right } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <div className={classNames(styles.StickyLayout, mods, additionsClasses)}>
            {left && <div className={styles.left}>{left}</div>}
            <div className={styles.content}>{content}</div>
            {right && <div className={styles.right}>{right}</div>}
        </div>
    )
})

export default StickyLayout
