import { VariantProps } from '@stitches/react'
import { ButtonHTMLAttributes, ReactNode } from 'react'

import { Wrapper } from './styles'

type ButtonProps = VariantProps<typeof Wrapper> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
  }

export function Button({ children, ...rest }: ButtonProps) {
  return <Wrapper {...rest}>{children}</Wrapper>
}
