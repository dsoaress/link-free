import { styled, theme } from '../../../styles/stitches.config'

export const Wrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridGap: '0.5rem'
})

export const SelectButton = styled('button', {
  width: '100%',
  height: '3rem',
  padding: '0.25rem',
  borderRadius: '0.25rem',
  borderWidth: '3px',
  borderStyle: 'solid',
  borderColor: theme.colors.slate200,
  cursor: 'pointer',

  variants: {
    active: {
      true: {
        borderColor: theme.colors.sky500
      }
    }
  }
})

export const Color = styled('div', {
  width: '100%',
  height: '100%',
  borderRadius: '0.25rem'
})
