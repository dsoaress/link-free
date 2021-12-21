import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'
import { decode } from 'jsonwebtoken'

import { validateUserPermissions } from 'utils/validateUserPermissions'

import type { Role } from '@prisma/client'

type Options = {
  roles: Role[]
}

export function authenticatedUserRoute(fn: GetServerSideProps, options?: Options) {
  return async (ctx: GetServerSidePropsContext) => {
    const { accessToken } = parseCookies(ctx)

    if (!accessToken) {
      return {
        redirect: {
          destination: '/auth',
          permanent: false
        }
      }
    }

    const { role: userRole } = decode(accessToken) as { role: Role }

    if (options) {
      const userHasValidPermissions = validateUserPermissions({
        userRole,
        roles: options.roles
      })

      if (!userHasValidPermissions) {
        return {
          redirect: {
            destination: '/',
            permanent: false
          }
        }
      }
    }

    return await fn(ctx)
  }
}
