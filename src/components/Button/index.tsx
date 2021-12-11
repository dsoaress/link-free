import { ButtonHTMLAttributes, ReactNode } from 'react'

import { ButtonVariantProps, Wrapper } from './styles'

type ButtonProps = ButtonVariantProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
  }

export function Button({ children, ...rest }: ButtonProps) {
  return <Wrapper {...rest}>{children}</Wrapper>
}
