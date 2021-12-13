import { ColorsType, styled, theme, VariantProps } from '../../styles/stitches.config'

const colorVariantFn = (
  lightColor: ColorsType,
  regularColor: ColorsType,
  darkColor: ColorsType,
  darkerColor: ColorsType
) => ({
  background: theme.colors[regularColor],
  borderColor: theme.colors[regularColor],
  color: theme.colors[lightColor],

  '&:hover': {
    background: theme.colors[darkColor],
    borderColor: theme.colors[darkColor]
  },

  '&:active': {
    background: theme.colors[darkerColor],
    borderColor: theme.colors[darkerColor]
  }
})

const outlineVariantFn = (color: ColorsType) => ({
  color: theme.colors[color],

  '&:hover': {
    background: 'rgba(0, 0, 0, 0.05)'
  },

  '&:active': {
    background: 'rgba(0, 0, 0, 0.1)'
  }
})

export const Wrapper = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '3rem',
  borderWidth: '2.5px',
  borderStyle: 'solid',
  fontSize: '1rem',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'all 0.25s ease-in-out',

  '&:hover': {
    transform: 'translateY(-0.15rem)'
  },

  variants: {
    color: {
      slate: colorVariantFn('slate50', 'slate600', 'slate700', 'slate800'),
      gray: colorVariantFn('gray50', 'gray600', 'gray700', 'gray800'),
      zinc: colorVariantFn('zinc50', 'zinc600', 'zinc700', 'zinc800'),
      neutral: colorVariantFn('neutral50', 'neutral600', 'neutral700', 'neutral800'),
      stone: colorVariantFn('stone50', 'stone600', 'stone700', 'stone800'),
      red: colorVariantFn('red50', 'red600', 'red700', 'red800'),
      orange: colorVariantFn('orange50', 'orange600', 'orange700', 'orange800'),
      amber: colorVariantFn('amber50', 'amber600', 'amber700', 'amber800'),
      yellow: colorVariantFn('yellow50', 'yellow600', 'yellow700', 'yellow800'),
      lime: colorVariantFn('lime50', 'lime600', 'lime700', 'lime800'),
      green: colorVariantFn('green50', 'green600', 'green700', 'green800'),
      emerald: colorVariantFn('emerald50', 'emerald600', 'emerald700', 'emerald800'),
      teal: colorVariantFn('teal50', 'teal600', 'teal700', 'teal800'),
      cyan: colorVariantFn('cyan50', 'cyan600', 'cyan700', 'cyan800'),
      sky: colorVariantFn('sky50', 'sky600', 'sky700', 'sky800'),
      blue: colorVariantFn('blue50', 'blue600', 'blue700', 'blue800'),
      indigo: colorVariantFn('indigo50', 'indigo600', 'indigo700', 'indigo800'),
      violet: colorVariantFn('violet50', 'violet600', 'violet700', 'violet800'),
      purple: colorVariantFn('purple50', 'purple600', 'purple700', 'purple800'),
      fuchsia: colorVariantFn('fuchsia50', 'fuchsia600', 'fuchsia700', 'fuchsia800'),
      pink: colorVariantFn('pink50', 'pink600', 'pink700', 'pink800'),
      rose: colorVariantFn('rose50', 'rose600', 'rose700', 'rose800')
    },

    schema: {
      square: {
        borderRadius: '0'
      },
      rounded: {
        borderRadius: '0.5rem'
      },
      pill: {
        borderRadius: '9999px'
      }
    },

    font: {
      baloo: {
        fontFamily: theme.fonts.baloo
      },
      montserrat: {
        fontFamily: theme.fonts.montserrat
      },
      roboto: {
        fontFamily: theme.fonts.roboto
      }
    },

    outline: {
      true: {
        background: 'transparent'
      }
    }
  },

  compoundVariants: [
    {
      color: 'slate',
      outline: true,
      css: outlineVariantFn('slate600')
    },
    {
      color: 'gray',
      outline: true,
      css: outlineVariantFn('gray600')
    },
    {
      color: 'zinc',
      outline: true,
      css: outlineVariantFn('zinc600')
    },
    {
      color: 'neutral',
      outline: true,
      css: outlineVariantFn('neutral600')
    },
    {
      color: 'stone',
      outline: true,
      css: outlineVariantFn('stone600')
    },
    {
      color: 'red',
      outline: true,
      css: outlineVariantFn('red600')
    },
    {
      color: 'orange',
      outline: true,
      css: outlineVariantFn('orange600')
    },
    {
      color: 'amber',
      outline: true,
      css: outlineVariantFn('amber600')
    },
    {
      color: 'yellow',
      outline: true,
      css: outlineVariantFn('yellow600')
    },
    {
      color: 'lime',
      outline: true,
      css: outlineVariantFn('lime600')
    },
    {
      color: 'green',
      outline: true,
      css: outlineVariantFn('green600')
    },
    {
      color: 'emerald',
      outline: true,
      css: outlineVariantFn('emerald600')
    },
    {
      color: 'teal',
      outline: true,
      css: outlineVariantFn('teal600')
    },
    {
      color: 'cyan',
      outline: true,
      css: outlineVariantFn('cyan600')
    },
    {
      color: 'sky',
      outline: true,
      css: outlineVariantFn('sky600')
    },
    {
      color: 'blue',
      outline: true,
      css: outlineVariantFn('blue600')
    },
    {
      color: 'indigo',
      outline: true,
      css: outlineVariantFn('indigo600')
    },
    {
      color: 'violet',
      outline: true,
      css: outlineVariantFn('violet600')
    },
    {
      color: 'purple',
      outline: true,
      css: outlineVariantFn('purple600')
    },
    {
      color: 'fuchsia',
      outline: true,
      css: outlineVariantFn('fuchsia600')
    },
    {
      color: 'pink',
      outline: true,
      css: outlineVariantFn('pink600')
    },
    {
      color: 'rose',
      outline: true,
      css: outlineVariantFn('rose600')
    }
  ],

  defaultVariants: {
    color: 'teal',
    schema: 'pill',
    font: 'roboto',
    outline: false
  }
})

export type ButtonVariantProps = VariantProps<typeof Wrapper>
