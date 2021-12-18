import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  list-style: none;
`

export const SocialItem = styled.li`
  transition: transform 0.25s ease;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`
