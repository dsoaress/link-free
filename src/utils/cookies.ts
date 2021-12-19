import { destroyCookie, setCookie } from 'nookies'

import { authConstants } from 'constants/auth'
import { api } from 'services/api'

import type { GetServerSidePropsContext } from 'next'

type SetCookiesProps = {
  ctx?: GetServerSidePropsContext
  accessToken: string
  refreshToken: string
}

export function setCookies({ ctx = undefined, accessToken, refreshToken }: SetCookiesProps) {
  const { SESSION_EXPIRES_IN_S } = authConstants
  // @ts-ignore
  api.defaults.headers['authorization'] = `Bearer ${accessToken}`

  setCookie(ctx, 'accessToken', accessToken, {
    maxAge: SESSION_EXPIRES_IN_S,
    path: '/'
  })

  setCookie(ctx, 'refreshToken', refreshToken, {
    maxAge: SESSION_EXPIRES_IN_S,
    path: '/'
  })
}

export function destroyCookies(ctx: GetServerSidePropsContext | undefined = undefined) {
  destroyCookie(ctx, 'accessToken', {
    path: '/'
  })

  destroyCookie(ctx, 'refreshToken', {
    path: '/'
  })
}
