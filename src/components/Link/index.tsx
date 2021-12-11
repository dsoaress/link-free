import NextLink from 'next/link'
import { AnchorHTMLAttributes } from 'react'

import { LinkVariantProps, Wrapper } from './styles'

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkVariantProps & {
    href: string
  }

export function Link({ href, ...rest }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <Wrapper {...rest} />
    </NextLink>
  )
}
