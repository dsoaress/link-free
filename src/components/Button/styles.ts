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

const outlineVariantFn = (
  lightColor: ColorsType,
  regularColor: ColorsType,
  darkColor: ColorsType
) => ({
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
      css: outlineVariantFn('slate50', 'slate100', 'slate600')
    },
    {
      color: 'gray',
      outline: true,
      css: outlineVariantFn('gray50', 'gray100', 'gray600')
    },
    {
      color: 'zinc',
      outline: true,
      css: outlineVariantFn('zinc50', 'zinc100', 'zinc600')
    },
    {
      color: 'neutral',
      outline: true,
      css: outlineVariantFn('neutral50', 'neutral100', 'neutral600')
    },
    {
      color: 'stone',
      outline: true,
      css: outlineVariantFn('stone50', 'stone100', 'stone600')
    },
    {
      color: 'red',
      outline: true,
      css: outlineVariantFn('red50', 'red100', 'red600')
    },
    {
      color: 'orange',
      outline: true,
      css: outlineVariantFn('orange50', 'orange100', 'orange600')
    },
    {
      color: 'amber',
      outline: true,
      css: outlineVariantFn('amber50', 'amber100', 'amber600')
    },
    {
      color: 'yellow',
      outline: true,
      css: outlineVariantFn('yellow50', 'yellow100', 'yellow600')
    },
    {
      color: 'lime',
      outline: true,
      css: outlineVariantFn('lime50', 'lime100', 'lime600')
    },
    {
      color: 'green',
      outline: true,
      css: outlineVariantFn('green50', 'green100', 'green600')
    },
    {
      color: 'emerald',
      outline: true,
      css: outlineVariantFn('emerald50', 'emerald100', 'emerald600')
    },
    {
      color: 'teal',
      outline: true,
      css: outlineVariantFn('teal50', 'teal100', 'teal600')
    },
    {
      color: 'cyan',
      outline: true,
      css: outlineVariantFn('cyan50', 'cyan100', 'cyan600')
    },
    {
      color: 'sky',
      outline: true,
      css: outlineVariantFn('sky50', 'sky100', 'sky600')
    },
    {
      color: 'blue',
      outline: true,
      css: outlineVariantFn('blue50', 'blue100', 'blue600')
    },
    {
      color: 'indigo',
      outline: true,
      css: outlineVariantFn('indigo50', 'indigo100', 'indigo600')
    },
    {
      color: 'violet',
      outline: true,
      css: outlineVariantFn('violet50', 'violet100', 'violet600')
    },
    {
      color: 'purple',
      outline: true,
      css: outlineVariantFn('purple50', 'purple100', 'purple600')
    },
    {
      color: 'fuchsia',
      outline: true,
      css: outlineVariantFn('fuchsia50', 'fuchsia100', 'fuchsia600')
    },
    {
      color: 'pink',
      outline: true,
      css: outlineVariantFn('pink50', 'pink100', 'pink600')
    },
    {
      color: 'rose',
      outline: true,
      css: outlineVariantFn('rose50', 'rose100', 'rose600')
    }
  ],

  defaultVariants: {
    color: 'teal',
    schema: 'pill',
    outline: false
  }
})

export type ButtonVariantProps = VariantProps<typeof Wrapper>
