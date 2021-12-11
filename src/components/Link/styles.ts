import { ColorsType, styled, theme, VariantProps } from '../../styles/stitches.config'

const colorVariantFn = (
  regularColor: ColorsType,
  darkColor: ColorsType,
  darkerColor: ColorsType
) => ({
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
    color: {
      slate: colorVariantFn('slate600', 'slate700', 'slate800'),
      gray: colorVariantFn('gray600', 'gray700', 'gray800'),
      zinc: colorVariantFn('zinc600', 'zinc700', 'zinc800'),
      neutral: colorVariantFn('neutral600', 'neutral700', 'neutral800'),
      stone: colorVariantFn('stone600', 'stone700', 'stone800'),
      red: colorVariantFn('red600', 'red700', 'red800'),
      orange: colorVariantFn('orange600', 'orange700', 'orange800'),
      amber: colorVariantFn('amber600', 'amber700', 'amber800'),
      yellow: colorVariantFn('yellow600', 'yellow700', 'yellow800'),
      lime: colorVariantFn('lime600', 'lime700', 'lime800'),
      green: colorVariantFn('green600', 'green700', 'green800'),
      emerald: colorVariantFn('emerald600', 'emerald700', 'emerald800'),
      teal: colorVariantFn('teal600', 'teal700', 'teal800'),
      cyan: colorVariantFn('cyan600', 'cyan700', 'cyan800'),
      sky: colorVariantFn('sky600', 'sky700', 'sky800'),
      blue: colorVariantFn('blue600', 'blue700', 'blue800'),
      indigo: colorVariantFn('indigo600', 'indigo700', 'indigo800'),
      violet: colorVariantFn('violet600', 'violet700', 'violet800'),
      purple: colorVariantFn('purple600', 'purple700', 'purple800'),
      fuchsia: colorVariantFn('fuchsia600', 'fuchsia700', 'fuchsia800'),
      pink: colorVariantFn('pink600', 'pink700', 'pink800'),
      rose: colorVariantFn('rose600', 'rose700', 'rose800')
    }
  },

  defaultVariants: {
    color: 'teal'
  }
})

export type LinkVariantProps = VariantProps<typeof Wrapper>
