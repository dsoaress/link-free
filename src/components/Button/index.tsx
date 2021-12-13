import type { ButtonHTMLAttributes, ReactNode } from 'react'

import type { ButtonVariantProps } from './styles'
import { Wrapper } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  theme?: ButtonVariantProps['theme']
  schema?: ButtonVariantProps['schema']
  outline?: ButtonVariantProps['outline']
  font?: ButtonVariantProps['font']
}

export function Button({ children, ...rest }: ButtonProps) {
  return <Wrapper {...rest}>{children}</Wrapper>
}

export type { ButtonVariantProps }
