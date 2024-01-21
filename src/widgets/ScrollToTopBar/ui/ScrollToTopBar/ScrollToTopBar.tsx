import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/redesigned'
import { ScrollToTopButton } from '@/features/scrollToTopButton'

import styles from './ScrollToTopBar.module.scss'

interface ScrollToTopBarProps {
    className?: string
}

const ScrollToTopBar: FC<ScrollToTopBarProps> = memo(props => {
    const { className } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <VStack
            justify="center"
            align="center"
            className={classNames(styles.ScrollToTopBar, mods, additionsClasses)}
            max
        >
            <ScrollToTopButton />
        </VStack>
    )
})

export default ScrollToTopBar
