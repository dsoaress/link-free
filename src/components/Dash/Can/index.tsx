import { useCan } from 'hooks/useCan'

import type { ReactNode } from 'react'
import type { Role } from '@prisma/client'

type CanProps = {
  children: ReactNode
  roles: Role[]
}

export function Can({ children, roles }: CanProps) {
  const userCanSeeComponents = useCan({ roles })

  if (!userCanSeeComponents) {
    return null
  }

  return <>{children}</>
}
