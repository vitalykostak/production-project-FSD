import { type ReactNode, type FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

import { routePaths } from '@/shared/consts/router'
import { getUserRoles, type UserRole } from '@/entities/User'

interface RequireRolesProps {
  children: ReactNode
  requiredRoles?: UserRole[]
}

const RequireRoles: FC<RequireRolesProps> = (props) => {
  const { children, requiredRoles } = props

  const location = useLocation()

  const userRoles = useSelector(getUserRoles)

  const hasRequiredRoles = useMemo(() => {
    if (!requiredRoles || !userRoles) {
      return false
    }

    const hasRoleIntersection = userRoles?.some((userRole) =>
      requiredRoles.includes(userRole)
    )

    return hasRoleIntersection
  }, [requiredRoles, userRoles])

  if (!requiredRoles) {
    return children
  }

  if (!hasRequiredRoles) {
    return <Navigate to={routePaths.forbidden} state={{ from: location }} replace />
  }

  return children
}

export default RequireRoles
