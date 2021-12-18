import { darken } from 'polished'
import styled from 'styled-components'

type ButtonProps = {
  color?: string
  background?: string
  variant?: 'square' | 'rounded' | 'pill'
  outlined?: boolean
  font?: string
  size?: 'small' | 'medium'
}

export const Button = styled.button.attrs((props: ButtonProps) => ({
  color: props.color || '#f8fafc',
  background: props.background || '#e11d48',
  variant: props.variant || 'rounded',
  outlined: props.outlined || false,
  font: props.font || 'inherit',
  size: props.size || 'medium'
}))<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
  font-family: ${({ font }) => font};
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  border-width: 2.5px;
  border-style: solid;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ background }) => darken(0.1, background)};
    transform: translateY(-0.15rem);
  }

  &:active {
    background: ${({ background }) => darken(0.2, background)};
  }

  ${({ variant }) => variant === 'square' && `border-radius: 0;`}

  ${({ variant }) => variant === 'rounded' && `border-radius: 0.5rem;`}

  ${({ variant }) => variant === 'pill' && `border-radius: 9999px;`}

  ${({ size }) =>
    size === 'small' &&
    `
    height: 2rem;
    font-size: 0.875rem;
  `}

  ${({ size }) =>
    size === 'medium' &&
    `
    height: 3rem;
    font-size: 1rem;
  `}

  ${({ outlined, color }) =>
    outlined &&
    `
    background: transparent;
    color: ${color};
    border-color: ${color};
  `}
`
