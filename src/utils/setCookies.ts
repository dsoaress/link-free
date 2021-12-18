import { GetServerSidePropsContext } from 'next'
import { setCookie } from 'nookies'

import { api } from '../services/api'

type SetCookiesProps = {
  ctx?: GetServerSidePropsContext
  accessToken: string
  refreshToken: string
}

export function setCookies({ ctx = undefined, accessToken, refreshToken }: SetCookiesProps) {
  // @ts-ignore
  api.defaults.headers['Authorization'] = `Bearer ${accessToken}`

  setCookie(ctx, 'accessToken', accessToken, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/'
  })

  setCookie(ctx, 'refreshToken', refreshToken, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/'
  })
}
