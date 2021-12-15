import { styled, theme } from '../../styles/stitches.config'

export const Wrapper = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  position: 'fixed',
  inset: 0
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '5rem 1rem 1rem',
  fontFamily: theme.fonts.roboto,
  color: theme.colors.slate900,
  background: theme.colors.slate50,
  overflowY: 'scroll'
})

export const Preview = styled('div', {
  position: 'relative',
  overflowY: 'scroll',

  '&::after': {
    content: '',
    position: 'absolute',
    inset: 0
  }
})
