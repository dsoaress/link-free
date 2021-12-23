import styled from 'styled-components'
import { darken, lighten } from 'polished'

import { Button as BaseButton } from 'components/Button'

type ButtonProps = {
  outlined?: boolean
  disabled?: boolean
  danger?: boolean
}

export const Button = styled(BaseButton)<ButtonProps>`
  background: #0284c7;
  border-color: #0284c7;
  border-width: 1px;

  &:hover {
    transform: translateY(0);
    background: ${({ outlined }) => (outlined ? '#0284c7' : darken(0.1, '#0284c7'))};
    border-color: ${({ outlined }) => (outlined ? '#0284c7' : darken(0.1, '#0284c7'))};
  }

  &:active {
    background: ${({ outlined }) => (outlined ? '#0284c7' : darken(0.2, '#0284c7'))};
    border-color: ${({ outlined }) => (outlined ? '#0284c7' : darken(0.2, '#0284c7'))};
  }

  ${({ outlined }) =>
    outlined &&
    `
    color: #0284c7;
    background: transparent;
    border-color: #0284c7;

    &:hover {
      color: #f8fafc;
    }
  `}

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    cursor: default;
    `}

  ${({ danger, outlined }) =>
    danger &&
    `
    color: ${outlined ? '#e11d48' : '#f8fafc'};
    background: ${outlined ? 'transparent' : '#e11d48'};;
    border-color: #e11d48;

    &:hover {
      color: ${outlined ? '#e11d48' : '#f8fafc'};
      background: ${outlined ? 'transparent' : darken(0.1, '#e11d48')};
      border-color: ${outlined ? darken(0.1, '#e11d48') : darken(0.1, '#e11d48')};
    }

    &:active {
      background: ${outlined ? lighten(0.4, '#e11d48') : darken(0.2, '#e11d48')};
      border-color: ${outlined ? lighten(0.4, '#e11d48') : darken(0.2, '#e11d48')};
    }
  `}
`
