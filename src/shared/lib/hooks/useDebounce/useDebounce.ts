import { useRef, useCallback } from 'react'

type DebounceCallback<T extends (...args: any[]) => void> = (
    originalCallback: T,
    delay: number,
) => (...args: Parameters<T>) => void

export const useDebounce: DebounceCallback<(...args: any[]) => void> = (
    originalCallback,
    delay,
) => {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    return useCallback(
        (...args: Parameters<typeof originalCallback>) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }

            timeoutRef.current = setTimeout(() => {
                originalCallback(...args)
            }, delay)
        },
        [originalCallback, delay],
    )
}
