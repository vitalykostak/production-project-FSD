import { useCallback, useState, type MouseEventHandler } from 'react'

interface BindHover {
    onMouseEnter: MouseEventHandler<HTMLElement>
    onMouseLeave: MouseEventHandler<HTMLElement>
}

type UseHoverResult = [isHover: boolean, BindHover]

export const useHover = (): UseHoverResult => {
    const [isHover, setIsHover] = useState<boolean>(false)

    const onMouseEnter: MouseEventHandler<HTMLElement> = useCallback(e => setIsHover(true), [])
    const onMouseLeave: MouseEventHandler<HTMLElement> = useCallback(e => setIsHover(false), [])

    return [isHover, { onMouseEnter, onMouseLeave }]
}
