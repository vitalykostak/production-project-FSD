import {
    memo,
    type FC,
    type ImgHTMLAttributes,
    type ReactNode,
    useState,
    useLayoutEffect,
} from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string
    fallback?: ReactNode
    errorFallback?: ReactNode
}

/**
 * @deprecated
 */

const AppImage: FC<AppImageProps> = memo(props => {
    const { className, fallback, errorFallback, title = 'app_image', src, ...otherImgProps } = props

    const [isLoading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useLayoutEffect(() => {
        const img = new Image()

        img.src = src ?? ''
        img.onload = () => {
            setLoading(false)
        }
        img.onerror = () => {
            setLoading(false)
            setError(true)
        }
    }, [src])

    if (isLoading && fallback) {
        return fallback
    }

    if (error) {
        return errorFallback
    }

    const mods = {}

    const additionsClasses = [className]

    return (
        <img
            {...otherImgProps}
            className={classNames('', mods, additionsClasses)}
            title={title}
            src={src}
        />
    )
})

export default AppImage
