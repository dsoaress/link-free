import { parseCookies } from 'nookies'

import type { GetStaticProps, GetServerSidePropsContext } from 'next'

export function guestUserRoute(fn: GetStaticProps) {
  return async (ctx: GetServerSidePropsContext) => {
    const { accessToken } = parseCookies(ctx)

    if (accessToken) {
      return {
        redirect: {
          destination: '/dash',
          permanent: false
        }
      }
    }

    return await fn(ctx)
  }
}
