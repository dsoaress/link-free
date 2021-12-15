import type { ButtonHTMLAttributes, ReactNode } from 'react'

import type { ButtonVariantProps } from './styles'
import { Wrapper } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  colorSchema?: ButtonVariantProps['colorSchema']
  styleSchema?: ButtonVariantProps['styleSchema']
  size?: ButtonVariantProps['size']
  font?: ButtonVariantProps['font']
  outline?: boolean
}

export function Button({ children, ...rest }: ButtonProps) {
  return <Wrapper {...rest}>{children}</Wrapper>
}

export type { ButtonVariantProps }
