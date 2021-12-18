import { GetServerSidePropsContext } from 'next'
import { destroyCookie } from 'nookies'

export function destroyCookies(ctx: GetServerSidePropsContext | undefined = undefined) {
  destroyCookie(ctx, 'accessToken', {
    path: '/'
  })

  destroyCookie(ctx, 'refreshToken', {
    path: '/'
  })
}
