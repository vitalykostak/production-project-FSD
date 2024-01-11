import { type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import loaderStyle from './Ellipsis.module.scss'

interface EllipsisLoaderProps {
    className?: string
}

/**
 * @deprecated
 */
const EllipsisLoader: FC<EllipsisLoaderProps> = props => {
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
