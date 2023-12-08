import { memo, type FC, type SVGProps } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Icon.module.scss'

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string
  Svg: FC<React.SVGProps<SVGSVGElement>>

}

const Icon: FC<IconProps> = memo((props) => {
  const { className, Svg, ...otherSvgProps } = props

  const mods = {}

  const additionsClasses = [className]

  return (
      <Svg className={classNames(styles.Icon, mods, additionsClasses)} {...otherSvgProps}/>
  )
})

export default Icon
