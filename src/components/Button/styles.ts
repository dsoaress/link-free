import { styled, theme } from '../../styles/stitches.config'

type Color = keyof typeof theme.colors

const colorVariantFn = (
  lightColor: Color,
  regularColor: Color,
  darkColor: Color,
  darkerColor: Color
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

const outlineVariantFn = (lightColor: Color, regularColor: Color, darkColor: Color) => ({
  color: theme.colors[darkColor],

  '&:hover': {
    background: theme.colors[lightColor]
  },

  '&:active': {
    background: theme.colors[regularColor]
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
  fontWeight: 'bold',
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
      },
      outline: {
        background: 'transparent'
      }
    }
  },

  compoundVariants: [
    {
      color: 'slate',
      schema: 'outline',
      css: outlineVariantFn('slate50', 'slate100', 'slate600')
    },
    {
      color: 'gray',
      schema: 'outline',
      css: outlineVariantFn('gray50', 'gray100', 'gray600')
    },
    {
      color: 'zinc',
      schema: 'outline',
      css: outlineVariantFn('zinc50', 'zinc100', 'zinc600')
    },
    {
      color: 'neutral',
      schema: 'outline',
      css: outlineVariantFn('neutral50', 'neutral100', 'neutral600')
    },
    {
      color: 'stone',
      schema: 'outline',
      css: outlineVariantFn('stone50', 'stone100', 'stone600')
    },
    {
      color: 'red',
      schema: 'outline',
      css: outlineVariantFn('red50', 'red100', 'red600')
    },
    {
      color: 'orange',
      schema: 'outline',
      css: outlineVariantFn('orange50', 'orange100', 'orange600')
    },
    {
      color: 'amber',
      schema: 'outline',
      css: outlineVariantFn('amber50', 'amber100', 'amber600')
    },
    {
      color: 'yellow',
      schema: 'outline',
      css: outlineVariantFn('yellow50', 'yellow100', 'yellow600')
    },
    {
      color: 'lime',
      schema: 'outline',
      css: outlineVariantFn('lime50', 'lime100', 'lime600')
    },
    {
      color: 'green',
      schema: 'outline',
      css: outlineVariantFn('green50', 'green100', 'green600')
    },
    {
      color: 'emerald',
      schema: 'outline',
      css: outlineVariantFn('emerald50', 'emerald100', 'emerald600')
    },
    {
      color: 'teal',
      schema: 'outline',
      css: outlineVariantFn('teal50', 'teal100', 'teal600')
    },
    {
      color: 'cyan',
      schema: 'outline',
      css: outlineVariantFn('cyan50', 'cyan100', 'cyan600')
    },
    {
      color: 'sky',
      schema: 'outline',
      css: outlineVariantFn('sky50', 'sky100', 'sky600')
    },
    {
      color: 'blue',
      schema: 'outline',
      css: outlineVariantFn('blue50', 'blue100', 'blue600')
    },
    {
      color: 'indigo',
      schema: 'outline',
      css: outlineVariantFn('indigo50', 'indigo100', 'indigo600')
    },
    {
      color: 'violet',
      schema: 'outline',
      css: outlineVariantFn('violet50', 'violet100', 'violet600')
    },
    {
      color: 'purple',
      schema: 'outline',
      css: outlineVariantFn('purple50', 'purple100', 'purple600')
    },
    {
      color: 'fuchsia',
      schema: 'outline',
      css: outlineVariantFn('fuchsia50', 'fuchsia100', 'fuchsia600')
    },
    {
      color: 'pink',
      schema: 'outline',
      css: outlineVariantFn('pink50', 'pink100', 'pink600')
    },
    {
      color: 'rose',
      schema: 'outline',
      css: outlineVariantFn('rose50', 'rose100', 'rose600')
    }
  ],

  defaultVariants: {
    color: 'teal',
    schema: 'outline'
  }
})
