import { type FC } from 'react'
import loaderStyle from './Ellipsis.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

interface EllipsisLoaderProps {
  className?: string
}

const EllipsisLoader: FC<EllipsisLoaderProps> = (props) => {
  const { className } = props

  return (
    <div className={classNames(loaderStyle['lds-ellipsis'], {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default EllipsisLoader
