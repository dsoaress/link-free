import { styled } from '../../styles/stitches.config'

export const Wrapper = styled('ul', {
  display: 'inline-flex',
  listStyle: 'none'
})

export const SocialItem = styled('li', {
  transition: 'transform 0.2s ease-in-out',

  '&:not(:last-child)': {
    marginRight: '1rem'
  },

  '&:hover': {
    transform: 'scale(1.1)'
  },

  '&:active': {
    transform: 'scale(0.95)'
  }
})
