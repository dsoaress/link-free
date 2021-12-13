import { Colors, styled, theme, VariantProps } from '../../styles/stitches.config'

const themeVariantFn = (regularColor: Colors, darkColor: Colors, darkerColor: Colors) => ({
  color: theme.colors[regularColor],

  '&:hover': {
    color: theme.colors[darkColor]
  },

  '&:active': {
    color: theme.colors[darkerColor]
  }
})

export const Wrapper = styled('a', {
  textDecoration: 'none',
  transition: 'color 0.25s ease',
  cursor: 'pointer',

  variants: {
    theme: {
      slate: themeVariantFn('slate600', 'slate700', 'slate800'),
      gray: themeVariantFn('gray600', 'gray700', 'gray800'),
      zinc: themeVariantFn('zinc600', 'zinc700', 'zinc800'),
      neutral: themeVariantFn('neutral600', 'neutral700', 'neutral800'),
      stone: themeVariantFn('stone600', 'stone700', 'stone800'),
      red: themeVariantFn('red600', 'red700', 'red800'),
      orange: themeVariantFn('orange600', 'orange700', 'orange800'),
      amber: themeVariantFn('amber600', 'amber700', 'amber800'),
      yellow: themeVariantFn('yellow600', 'yellow700', 'yellow800'),
      lime: themeVariantFn('lime600', 'lime700', 'lime800'),
      green: themeVariantFn('green600', 'green700', 'green800'),
      emerald: themeVariantFn('emerald600', 'emerald700', 'emerald800'),
      teal: themeVariantFn('teal600', 'teal700', 'teal800'),
      cyan: themeVariantFn('cyan600', 'cyan700', 'cyan800'),
      sky: themeVariantFn('sky600', 'sky700', 'sky800'),
      blue: themeVariantFn('blue600', 'blue700', 'blue800'),
      indigo: themeVariantFn('indigo600', 'indigo700', 'indigo800'),
      violet: themeVariantFn('violet600', 'violet700', 'violet800'),
      purple: themeVariantFn('purple600', 'purple700', 'purple800'),
      fuchsia: themeVariantFn('fuchsia600', 'fuchsia700', 'fuchsia800'),
      pink: themeVariantFn('pink600', 'pink700', 'pink800'),
      rose: themeVariantFn('rose600', 'rose700', 'rose800')
    }
  },

  defaultVariants: {
    theme: 'teal'
  }
})

export type LinkVariantProps = VariantProps<typeof Wrapper>
