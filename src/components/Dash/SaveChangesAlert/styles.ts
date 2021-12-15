import { styled, theme } from '../../../styles/stitches.config'

export const Wrapper = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '50%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  background: theme.colors.sky200,
  color: theme.colors.slate700,
  fontFamily: theme.fonts.roboto,
  fontSize: '0.875rem',
  lineHeight: 1,
  transition: 'all 0.25s ease-in-out',

  variants: {
    show: {
      true: {
        opacity: 1
      },
      false: {
        opacity: 0
      }
    }
  },

  defaultVariant: {
    show: false
  }
})

export const ButtonsGroup = styled('div', {
  display: 'flex',
  gap: '1rem'
})
