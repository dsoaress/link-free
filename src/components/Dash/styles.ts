import { styled, theme } from '../../styles/stitches.config'

export const Wrapper = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr'
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  fontFamily: theme.fonts.roboto
})

export const Preview = styled('div', {
  position: 'relative',

  '&::after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})
