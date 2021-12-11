import NextLink from 'next/link'
import { AnchorHTMLAttributes } from 'react'

import { LinkVariantProps, Wrapper } from './styles'

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  color?: LinkVariantProps['color']
}

export function Link({ href, ...rest }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <Wrapper {...rest} />
    </NextLink>
  )
}
