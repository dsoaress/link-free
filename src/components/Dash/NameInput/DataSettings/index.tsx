import { useState } from 'react'

import { useData } from 'hooks/useData'
import { DescriptionInput } from 'components/Dash/DescriptionInput'
import { FontsSelect } from 'components/Dash/FontsSelect'
import { NameInput } from 'components/Dash/NameInput'
import { Input } from 'components/Input'

export function DataSettings() {
  const { data, setData } = useData()
  const [number, setNumber] = useState(0)

  return (
    <>
      <div>
        <NameInput />
        <DescriptionInput />
        <FontsSelect />
      </div>

      <Input
        label="Border radius"
        type="number"
        min={0}
        step={1}
        value={+data.settings.buttonBorderRadius}
        onChange={e =>
          setData({
            ...data,
            settings: {
              ...data.settings,
              buttonBorderRadius: e.target.value
            }
          })
        }
      />
    </>
  )
}
