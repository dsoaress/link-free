import { Title, Wrapper } from './styles'

import type { ReactNode } from 'react'

type SectionHeaderProps = {
  title: string
  children?: ReactNode
}

export function SectionHeader({ title, children }: SectionHeaderProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  )
}
