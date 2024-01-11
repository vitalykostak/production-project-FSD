import { memo, type FC, type ReactNode } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './MainLayout.module.scss'

interface MainLayoutProps {
    className?: string
    header?: ReactNode
    sidebar?: ReactNode
    content?: ReactNode
    toolbar: ReactNode
}

const MainLayout: FC<MainLayoutProps> = memo(props => {
    const { className, sidebar, content, header, toolbar } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <div className={classNames(styles.MainLayout, mods, additionsClasses)}>
            <div className={styles.sidebar}>{sidebar}</div>
            <div className={styles.content}>{content}</div>
            <div className={styles.rightBar}>
                <div className={styles.header}>{header}</div>
                <div className={styles.toolbar}>{toolbar}</div>
            </div>
        </div>
    )
})

export default MainLayout
