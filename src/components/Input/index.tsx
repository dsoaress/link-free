import { useRef } from 'react'

import { Error, Footer, InputWrapper, Label, Loading, Wrapper } from './styles'

import type { InputHTMLAttributes } from 'react'
import type { IconType } from 'react-icons/lib'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  icon?: IconType
  errorMessage?: string
  loadingMessage?: string
}

export function Input({
  label,
  icon: Icon,
  errorMessage = '',
  loadingMessage = '',
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Wrapper onClick={() => inputRef?.current?.focus()}>
      {!!label && <Label>{label}</Label>}
      <InputWrapper hasError={!!errorMessage}>
        {!!Icon && <Icon />}
        <input ref={inputRef} {...rest} />
      </InputWrapper>
      <Footer>
        {!!loadingMessage ? (
          <Loading isLoading={!!loadingMessage}>{loadingMessage}</Loading>
        ) : (
          <Error hasError={!!errorMessage}>{errorMessage}</Error>
        )}
      </Footer>
    </Wrapper>
  )
}
