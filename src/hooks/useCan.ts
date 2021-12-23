import { validateUserPermissions } from 'utils/validateUserPermissions'

import { useAuth } from './useAuth'

import type { Role } from '@prisma/client'

type UseCanPros = {
  roles: Role[]
}

export function useCan({ roles }: UseCanPros) {
  const { user } = useAuth()

  if (!user) {
    return false
  }

  const userHasValidPermissions = validateUserPermissions({
    userRole: user.role,
    roles
  })

  return userHasValidPermissions
}
