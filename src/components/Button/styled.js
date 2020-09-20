import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  color: ${props => props.buttonsFontColor};
  background: ${props => props.buttonsColor};
  border: none;
  border-radius: ${props => props.borderRadius};
  padding: 1.5rem;
  cursor: pointer;
`

export const Link = styled.a`
  text-decoration: none;
`
