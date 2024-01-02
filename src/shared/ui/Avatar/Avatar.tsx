import { memo, type FC, useMemo, type CSSProperties } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import avatarStyles from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

const Avatar: FC<AvatarProps> = memo((props) => {
  const { className, src, size = 100, alt } = props

  const mods = {}

  const styles = useMemo<CSSProperties>(
    () => ({ width: size, height: size }),
    [size]
  )

  return (
    <img
      className={classNames(avatarStyles.Avatar, mods, [className])}
      style={styles}
      src={src}
      alt={alt}
    />
  )
})

export default Avatar
