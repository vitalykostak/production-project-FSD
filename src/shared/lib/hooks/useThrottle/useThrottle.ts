import { useRef, useCallback } from 'react'

type ThrottleCallback<T extends (...args: any[]) => void> = (
    originalCallback: T,
    delay: number,
) => (...args: Parameters<T>) => void
// TODO better types for it
export const useThrottle: ThrottleCallback<(...args: any[]) => void> = (originalCallback, delay) => {
    const isThrottledRef = useRef<boolean>(false)

    return useCallback(
        (...args: Parameters<typeof originalCallback>) => {
            if (isThrottledRef.current) {
                return
            }

            // Execute the original callback with provided arguments
            originalCallback(...args)

            // Set a throttle to prevent immediate subsequent calls
            isThrottledRef.current = true
            setTimeout(() => {
                isThrottledRef.current = false
            }, delay)
        },
        [originalCallback, delay],
    )
}
