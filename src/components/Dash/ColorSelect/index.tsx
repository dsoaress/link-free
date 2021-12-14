import { useState } from 'react'

import { useData } from '../../../hooks/useData'
import type { Colors } from '../../../styles/stitches.config'
import { theme } from '../../../styles/stitches.config'
import { Color, SelectButton, Wrapper } from './styles'

type ColorSelectProps = {
  prop: 'texts' | 'socialLinks' | 'background' | 'buttonLinks'
}

export function ColorSelect({ prop }: ColorSelectProps) {
  const { data, setData } = useData()
  const [activeColor, setActiveColor] = useState<string>(data.settings.colors[prop] as string)

  const allColors = Object.keys(theme.colors) as Colors[]
  const colorsSchema = [
    'slate',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose'
  ]

  const colors = {
    texts: allColors,
    socialLinks: colorsSchema,
    background: allColors,
    buttonLinks: colorsSchema
  }[prop]

  const backgroundColor = (color: string) => {
    if (prop === 'background' || prop === 'texts') {
      return theme.colors[color as Colors]
    }

    return theme.colors[`${color}600` as Colors]
  }

  const handleChange = (color: string) => {
    setActiveColor(color)
    setData({
      ...data,
      settings: {
        ...data.settings,
        colors: {
          ...data.settings.colors,
          [prop]: color
        }
      }
    })
  }

  return (
    <Wrapper>
      {colors.map(color => (
        <SelectButton
          key={color}
          active={color === activeColor}
          onClick={() => handleChange(color)}
        >
          <Color
            css={{
              backgroundColor: backgroundColor(color)
            }}
          />
        </SelectButton>
      ))}
    </Wrapper>
  )
}
