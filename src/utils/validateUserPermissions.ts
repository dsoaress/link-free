import type { Role } from '@prisma/client'

type ValidateUserPermissionsParams = {
  userRole: Role
  roles?: Role[]
}

export function validateUserPermissions({ userRole, roles }: ValidateUserPermissionsParams) {
  if (roles && roles.length > 0) {
    const hasPermission = roles.some(role => {
      return userRole.includes(role)
    })

    if (!hasPermission) {
      return false
    }
  }

  return true
}
