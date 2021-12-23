import { BlockPicker } from 'react-color'

import { colors } from 'constants/colors'
import { useData } from 'hooks/useData'

type ColorPickerProps = {
  prop:
    | 'texts'
    | 'icons'
    | 'background'
    | 'buttonLabelColor'
    | 'buttonBackgroundColor'
    | 'buttonBorderColor'
}

export function ColorPicker({ prop }: ColorPickerProps) {
  const { data, setData } = useData()

  return (
    <BlockPicker
      color={data.settings.colors[prop]}
      colors={colors}
      triangle="hide"
      width="100%"
      onChangeComplete={color =>
        setData({
          ...data,
          settings: {
            ...data.settings,
            colors: {
              ...data.settings.colors,
              [prop]: color.hex
            }
          }
        })
      }
    />
  )
}
