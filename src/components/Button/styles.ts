import { Colors, styled, theme, VariantProps } from '../../styles/stitches.config'

const themeVariantFn = (
  lightColor: Colors,
  regularColor: Colors,
  darkColor: Colors,
  darkerColor: Colors
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

const outlineVariantFn = (color: Colors) => ({
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
    theme: {
      slate: themeVariantFn('slate50', 'slate600', 'slate700', 'slate800'),
      gray: themeVariantFn('gray50', 'gray600', 'gray700', 'gray800'),
      zinc: themeVariantFn('zinc50', 'zinc600', 'zinc700', 'zinc800'),
      neutral: themeVariantFn('neutral50', 'neutral600', 'neutral700', 'neutral800'),
      stone: themeVariantFn('stone50', 'stone600', 'stone700', 'stone800'),
      red: themeVariantFn('red50', 'red600', 'red700', 'red800'),
      orange: themeVariantFn('orange50', 'orange600', 'orange700', 'orange800'),
      amber: themeVariantFn('amber50', 'amber600', 'amber700', 'amber800'),
      yellow: themeVariantFn('yellow50', 'yellow600', 'yellow700', 'yellow800'),
      lime: themeVariantFn('lime50', 'lime600', 'lime700', 'lime800'),
      green: themeVariantFn('green50', 'green600', 'green700', 'green800'),
      emerald: themeVariantFn('emerald50', 'emerald600', 'emerald700', 'emerald800'),
      teal: themeVariantFn('teal50', 'teal600', 'teal700', 'teal800'),
      cyan: themeVariantFn('cyan50', 'cyan600', 'cyan700', 'cyan800'),
      sky: themeVariantFn('sky50', 'sky600', 'sky700', 'sky800'),
      blue: themeVariantFn('blue50', 'blue600', 'blue700', 'blue800'),
      indigo: themeVariantFn('indigo50', 'indigo600', 'indigo700', 'indigo800'),
      violet: themeVariantFn('violet50', 'violet600', 'violet700', 'violet800'),
      purple: themeVariantFn('purple50', 'purple600', 'purple700', 'purple800'),
      fuchsia: themeVariantFn('fuchsia50', 'fuchsia600', 'fuchsia700', 'fuchsia800'),
      pink: themeVariantFn('pink50', 'pink600', 'pink700', 'pink800'),
      rose: themeVariantFn('rose50', 'rose600', 'rose700', 'rose800')
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
      theme: 'slate',
      outline: true,
      css: outlineVariantFn('slate600')
    },
    {
      theme: 'gray',
      outline: true,
      css: outlineVariantFn('gray600')
    },
    {
      theme: 'zinc',
      outline: true,
      css: outlineVariantFn('zinc600')
    },
    {
      theme: 'neutral',
      outline: true,
      css: outlineVariantFn('neutral600')
    },
    {
      theme: 'stone',
      outline: true,
      css: outlineVariantFn('stone600')
    },
    {
      theme: 'red',
      outline: true,
      css: outlineVariantFn('red600')
    },
    {
      theme: 'orange',
      outline: true,
      css: outlineVariantFn('orange600')
    },
    {
      theme: 'amber',
      outline: true,
      css: outlineVariantFn('amber600')
    },
    {
      theme: 'yellow',
      outline: true,
      css: outlineVariantFn('yellow600')
    },
    {
      theme: 'lime',
      outline: true,
      css: outlineVariantFn('lime600')
    },
    {
      theme: 'green',
      outline: true,
      css: outlineVariantFn('green600')
    },
    {
      theme: 'emerald',
      outline: true,
      css: outlineVariantFn('emerald600')
    },
    {
      theme: 'teal',
      outline: true,
      css: outlineVariantFn('teal600')
    },
    {
      theme: 'cyan',
      outline: true,
      css: outlineVariantFn('cyan600')
    },
    {
      theme: 'sky',
      outline: true,
      css: outlineVariantFn('sky600')
    },
    {
      theme: 'blue',
      outline: true,
      css: outlineVariantFn('blue600')
    },
    {
      theme: 'indigo',
      outline: true,
      css: outlineVariantFn('indigo600')
    },
    {
      theme: 'violet',
      outline: true,
      css: outlineVariantFn('violet600')
    },
    {
      theme: 'purple',
      outline: true,
      css: outlineVariantFn('purple600')
    },
    {
      theme: 'fuchsia',
      outline: true,
      css: outlineVariantFn('fuchsia600')
    },
    {
      theme: 'pink',
      outline: true,
      css: outlineVariantFn('pink600')
    },
    {
      theme: 'rose',
      outline: true,
      css: outlineVariantFn('rose600')
    }
  ],

  defaultVariants: {
    theme: 'teal',
    schema: 'pill',
    font: 'roboto',
    outline: false
  }
})

export type ButtonVariantProps = VariantProps<typeof Wrapper>
