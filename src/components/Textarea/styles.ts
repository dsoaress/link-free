import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 226px;
`

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-wight: 500;
`

export const TextareaWrapper = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  width: 100%;
  height: 200px;
  background: transparent;
  font-size: 1rem;
  resize: none;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: 0;
    box-shadow: 0 0 5px 0 #0284c7;
  }
`
