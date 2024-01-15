import { useEffect, type MutableRefObject } from 'react'

import { toggleFeature } from '../../featureFlags'

interface UseInfiniteScrollProps {
    containerRef: MutableRefObject<HTMLElement>
    triggerRef: MutableRefObject<HTMLElement>
    onIntersection?: () => void
}

export const useInfiniteScroll = (props: UseInfiniteScrollProps) => {
    const { containerRef, triggerRef, onIntersection } = props

    useEffect(() => {
        if (!onIntersection) {
            return
        }

        const containerElement = containerRef.current
        const triggerElement = triggerRef.current

        const intersectionOptions = {
            root: toggleFeature({
                featureFlag: 'isAppRedesigned',
                onDisabled: () => containerElement,
                onEnabled: () => undefined,
            }),
            rootMargin: '0px',
            threshold: 1.0,
        }

        const intersectionObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                onIntersection()
            }
        }, intersectionOptions)
        intersectionObserver.observe(triggerElement)

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            intersectionObserver.unobserve(triggerElement)
        }
    }, [containerRef, triggerRef, onIntersection])
}
