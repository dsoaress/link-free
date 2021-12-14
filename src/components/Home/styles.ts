import { styled } from '../../styles/stitches.config'

export const Wrapper = styled('main', {
  width: '100%',
  height: '100vh',
  transition: 'all 0.25s ease-in-out'
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  margin: '0 auto',
  maxWidth: '640px',
  padding: '2rem 1rem'
})

export const Name = styled('h1', {
  fontSize: '2rem',
  fontWeight: 500,
  margin: 0
})

export const Description = styled('p', {
  fontSize: '1rem',
  textAlign: 'center',
  fontWeight: 400,
  lineHeight: '1.5'
})
