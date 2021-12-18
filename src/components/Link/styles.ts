import { darken } from 'polished'
import styled from 'styled-components'

type LinkProps = {
  color?: string
}

export const Link = styled.a.attrs((props: LinkProps) => ({
  color: props.color || '#e11d48'
}))<LinkProps>`
  text-decoration: none;
  cursor: pointer;
  transition: color 0.25s ease;

  &:hover {
    color: ${({ color }) => darken(0.1, color)};
  }

  &:active {
    color: ${({ color }) => darken(0.2, color)};
  }
`
