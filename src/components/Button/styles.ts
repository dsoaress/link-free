import { Colors, styled, theme, VariantProps } from '../../styles/stitches.config'

const colorSchemaFn = (
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
    colorSchema: {
      slate: colorSchemaFn('slate50', 'slate600', 'slate700', 'slate800'),
      red: colorSchemaFn('red50', 'red600', 'red700', 'red800'),
      orange: colorSchemaFn('orange50', 'orange600', 'orange700', 'orange800'),
      amber: colorSchemaFn('amber50', 'amber600', 'amber700', 'amber800'),
      yellow: colorSchemaFn('yellow50', 'yellow600', 'yellow700', 'yellow800'),
      lime: colorSchemaFn('lime50', 'lime600', 'lime700', 'lime800'),
      green: colorSchemaFn('green50', 'green600', 'green700', 'green800'),
      emerald: colorSchemaFn('emerald50', 'emerald600', 'emerald700', 'emerald800'),
      teal: colorSchemaFn('teal50', 'teal600', 'teal700', 'teal800'),
      cyan: colorSchemaFn('cyan50', 'cyan600', 'cyan700', 'cyan800'),
      sky: colorSchemaFn('sky50', 'sky600', 'sky700', 'sky800'),
      blue: colorSchemaFn('blue50', 'blue600', 'blue700', 'blue800'),
      indigo: colorSchemaFn('indigo50', 'indigo600', 'indigo700', 'indigo800'),
      violet: colorSchemaFn('violet50', 'violet600', 'violet700', 'violet800'),
      purple: colorSchemaFn('purple50', 'purple600', 'purple700', 'purple800'),
      fuchsia: colorSchemaFn('fuchsia50', 'fuchsia600', 'fuchsia700', 'fuchsia800'),
      pink: colorSchemaFn('pink50', 'pink600', 'pink700', 'pink800'),
      rose: colorSchemaFn('rose50', 'rose600', 'rose700', 'rose800')
    },

    styleSchema: {
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
      colorSchema: 'slate',
      outline: true,
      css: outlineVariantFn('slate600')
    },
    {
      colorSchema: 'red',
      outline: true,
      css: outlineVariantFn('red600')
    },
    {
      colorSchema: 'orange',
      outline: true,
      css: outlineVariantFn('orange600')
    },
    {
      colorSchema: 'amber',
      outline: true,
      css: outlineVariantFn('amber600')
    },
    {
      colorSchema: 'yellow',
      outline: true,
      css: outlineVariantFn('yellow600')
    },
    {
      colorSchema: 'lime',
      outline: true,
      css: outlineVariantFn('lime600')
    },
    {
      colorSchema: 'green',
      outline: true,
      css: outlineVariantFn('green600')
    },
    {
      colorSchema: 'emerald',
      outline: true,
      css: outlineVariantFn('emerald600')
    },
    {
      colorSchema: 'teal',
      outline: true,
      css: outlineVariantFn('teal600')
    },
    {
      colorSchema: 'cyan',
      outline: true,
      css: outlineVariantFn('cyan600')
    },
    {
      colorSchema: 'sky',
      outline: true,
      css: outlineVariantFn('sky600')
    },
    {
      colorSchema: 'blue',
      outline: true,
      css: outlineVariantFn('blue600')
    },
    {
      colorSchema: 'indigo',
      outline: true,
      css: outlineVariantFn('indigo600')
    },
    {
      colorSchema: 'violet',
      outline: true,
      css: outlineVariantFn('violet600')
    },
    {
      colorSchema: 'purple',
      outline: true,
      css: outlineVariantFn('purple600')
    },
    {
      colorSchema: 'fuchsia',
      outline: true,
      css: outlineVariantFn('fuchsia600')
    },
    {
      colorSchema: 'pink',
      outline: true,
      css: outlineVariantFn('pink600')
    },
    {
      colorSchema: 'rose',
      outline: true,
      css: outlineVariantFn('rose600')
    }
  ],

  defaultVariants: {
    colorSchema: 'teal',
    styleSchema: 'pill',
    font: 'roboto',
    outline: false
  }
})

export type ButtonVariantProps = VariantProps<typeof Wrapper>
