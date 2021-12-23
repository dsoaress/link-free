import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 64px;
`

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-wight: 500;
`

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 2.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 12px;
  transition: all 0.2s ease-in-out;

  &:focus-within {
    box-shadow: 0 0 5px 0 #0284c7;
  }

  select {
    width: 100%;
    border: none;
    background: transparent;
    -webkit-appearance: none;
    font-size: 1rem;
    cursor: pointer;

    &:focus {
      outline: 0;
    }
  }
`
