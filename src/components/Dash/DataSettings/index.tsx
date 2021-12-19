import 'rc-slider/assets/index.css'

import Slider from 'rc-slider'

import { useData } from '../../../hooks/useData'
import { DescriptionInput } from '../DescriptionInput'
import { FontsSelect } from '../FontsSelect'
import { NameInput } from '../NameInput'

export function DataSettings() {
  const { data, setData } = useData()

  return (
    <>
      <div>
        <NameInput />
        <DescriptionInput />
        <FontsSelect />
      </div>

      <div>
        <Slider
          value={+data.settings.buttonBorderRadius}
          min={0}
          max={40}
          step={1}
          onChange={value =>
            setData({
              ...data,
              settings: {
                ...data.settings,
                buttonBorderRadius: String(value)
              }
            })
          }
        />
      </div>
    </>
  )
}
