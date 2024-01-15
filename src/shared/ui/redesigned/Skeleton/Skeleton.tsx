import { memo, type FC, type CSSProperties } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import styles from './Skeleton.module.scss'

export interface SkeletonProps {
    className?: string
    width?: string
    height?: string
    borderRadius?: string
}

const Skeleton: FC<SkeletonProps> = memo(props => {
    const { className, width, height, borderRadius } = props

    const inlineStyles: CSSProperties = {
        width,
        height,
        borderRadius,
    }

    const mods = {}

    const additionsClasses = [className]

    return (
        <div
            className={classNames(styles.Skeleton, mods, additionsClasses)}
            style={inlineStyles}
        ></div>
    )
})

export default Skeleton
