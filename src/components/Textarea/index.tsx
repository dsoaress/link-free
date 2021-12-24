import { TextareaWrapper, Label, Wrapper } from './styles'

import type { TextareaHTMLAttributes } from 'react'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
}

export function Textarea({ label, ...rest }: TextareaProps) {
  return (
    <Wrapper>
      {!!label && <Label>{label}</Label>}
      <TextareaWrapper {...rest} />
    </Wrapper>
  )
}
