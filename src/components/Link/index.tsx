import NextLink from 'next/link'
import type { AnchorHTMLAttributes } from 'react'

import type { LinkVariantProps } from './styles'
import { Wrapper } from './styles'

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  theme?: LinkVariantProps['theme']
}

export function Link({ href, theme, ...rest }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <Wrapper theme={theme} {...rest} />
    </NextLink>
  )
}

export type { LinkVariantProps }
