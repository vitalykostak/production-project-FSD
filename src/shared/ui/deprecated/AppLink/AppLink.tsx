import { memo, type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

import { classNames } from '@/shared/lib/classNames/classNames'

import appLinkStyle from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    to: string
    className?: string
    theme?: AppLinkTheme
}

/**
 * @deprecated
 */
const AppLink: FC<AppLinkProps> = memo(props => {
    const { to, children, className, theme = AppLinkTheme.PRIMARY, ...otherLinkProps } = props

    return (
        <Link
            to={to}
            {...otherLinkProps}
            className={classNames(appLinkStyle.AppLink, {}, [appLinkStyle[theme], className])}
        >
            {children}
        </Link>
    )
})

export default AppLink
