import styled from 'styled-components'

export const Wrapper = styled.ul`
  display: grid;
  gap: 1rem;
  list-style: none;
`

export const Link = styled.a`
  color: ${props => props.fontColor};
  text-decoration: none;
`

export const List = styled.li`
  background: ${props => props.buttonsColor};
  border-radius: ${props => props.borderRadius};
  padding: 1.5rem;
`
