import { type FC } from 'react'

import EllipsisLoader from '@/shared/ui/deprecated/EllipsisLoader/EllipsisLoader'
import { classNames } from '@/shared/lib/classNames/classNames'

import loaderStyle from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string
}

const PageLoader: FC<PageLoaderProps> = props => {
    const { className } = props

    return (
        <div className={classNames(loaderStyle.PageLoader, {}, [className])}>
            <EllipsisLoader />
        </div>
    )
}

export default PageLoader
