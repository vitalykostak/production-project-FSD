import { memo, type FC, useMemo, type CSSProperties } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import Skeleton from '../Skeleton/Skeleton'
import UserIcon from '../../../assets/icons/user.svg'
import Icon from '../Icon/Icon'
import { AppImage } from '../../redesigned'

import avatarStyles from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
    invertedErrorFallbackColor?: boolean
}

/**
 * @deprecated
 */
const Avatar: FC<AvatarProps> = memo(props => {
    const { className, src, size = 100, alt, invertedErrorFallbackColor } = props

    const mods = {}

    const styles = useMemo<CSSProperties>(() => ({ width: size, height: size }), [size])

    const fallback = <Skeleton width={`${size}px`} height={`${size}px`} borderRadius="50%" />
    const errorFallback = (
        <Icon Svg={UserIcon} width={size} height={size} inverted={invertedErrorFallbackColor} />
    )

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            className={classNames(avatarStyles.Avatar, mods, [className])}
            style={styles}
            src={src}
            alt={alt}
        />
    )
})

export default Avatar
