import { useRef, type FC, type ReactNode, type MutableRefObject, type UIEventHandler } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useAppDispatch, useInfiniteScroll, useInitialEffect, useThrottle } from '@/shared/lib/hooks'
import { saveScrollPositionActions, getSavedScrollPositionByPath } from '@/features/SaveScrollPosition'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { type TestProps } from '@/shared/types'

import styles from './Page.module.scss'

export const wrapperId = 'PAGE_WRAPPER_ID@'

interface PageProps extends TestProps {
    className?: string
    children?: ReactNode
    onScrollEnd?: () => void
    shouldSaveScrollPosition?: boolean
    saveScrollPositionThrottleDelay?: number
}

const Page: FC<PageProps> = props => {
    const {
        className,
        children,
        onScrollEnd,
        shouldSaveScrollPosition,
        saveScrollPositionThrottleDelay = 500,
        'data-testid': dataTestId = 'Page',
    } = props

    const dispatch = useAppDispatch()
    const location = useLocation()

    const scrollPosition = useSelector((state: StateSchema) => getSavedScrollPositionByPath(state, location.pathname))

    const containerRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useInfiniteScroll({
        containerRef,
        triggerRef,
        onIntersection: onScrollEnd,
    })

    const onScroll: UIEventHandler<HTMLDivElement> = useThrottle(e => {
        dispatch(
            saveScrollPositionActions.setScrollPosition({
                path: location.pathname,
                position: e.currentTarget.scrollTop,
            }),
        )
    }, saveScrollPositionThrottleDelay)

    useInitialEffect(() => {
        if (shouldSaveScrollPosition) {
            containerRef.current.scrollTo({ top: scrollPosition })
        }
    })

    const mods = {}

    const additionsClasses = [className]

    return (
        <main
            className={classNames(styles.Page, mods, additionsClasses)}
            ref={containerRef}
            onScroll={shouldSaveScrollPosition ? onScroll : undefined}
            id={wrapperId}
            data-testid={dataTestId}
        >
            {children}
            {/* not sure if it's needed */}
            {onScrollEnd && <div className={styles.scroll} ref={triggerRef} />}
        </main>
    )
}

export default Page
