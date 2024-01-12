import { memo, type FC } from 'react'
import { type LinkProps } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { classNames } from '@/shared/lib/classNames/classNames'

import appLinkStyle from './AppLink.module.scss'

type AppLinkVariant = 'primary' | 'red'

interface AppLinkProps extends LinkProps {
    to: string
    className?: string
    variant?: AppLinkVariant
    classNameActive?: string
}

const AppLink: FC<AppLinkProps> = memo(props => {
    const {
        to,
        children,
        className,
        variant = 'primary',
        classNameActive = '',
        ...otherLinkProps
    } = props

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames('', { [classNameActive]: isActive }, [appLinkStyle[variant], className])
            }
            {...otherLinkProps}
        >
            {children}
        </NavLink>
    )
})

export default AppLink
