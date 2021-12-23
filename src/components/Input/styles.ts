import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 88px;
`

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-wight: 500;
`

export const InputWrapper = styled.div<{ hasError: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 2.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ hasError }) => (hasError ? '#f00' : '#ccc')};
  border-radius: 8px;
  padding: 0 12px;
  transition: all 0.2s ease-in-out;

  &:focus-within {
    box-shadow: 0 0 5px 0 ${({ hasError }) => (hasError ? '#f00' : '#0284c7')};
  }

  input {
    width: 100%;
    border: none;
    background: transparent;
    font-size: 1rem;

    &:focus {
      outline: 0;
    }

    &::-webkit-contacts-auto-fill-button,
    &::-webkit-credentials-auto-fill-button {
      visibility: hidden;
      position: absolute;
      right: 0;
    }
  }
`

export const Footer = styled.div`
  height: 0.875rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
`

export const Loading = styled.span<{ isLoading: boolean }>`
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
`

export const Error = styled.span<{ hasError: boolean }>`
  color: #f00;
  opacity: ${({ hasError }) => (hasError ? 1 : 0)};
`
