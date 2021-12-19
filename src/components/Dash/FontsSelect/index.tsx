import { useData } from 'hooks/useData'

import type { Fonts } from 'types/Fonts'

export function FontsSelect() {
  const { data, setData } = useData()

  return (
    <select
      value={data.settings.font}
      onChange={e =>
        setData({
          ...data,
          settings: {
            ...data.settings,
            font: e.target.value as Fonts
          }
        })
      }
    >
      <option value="inconsolata">Inconsolata</option>
      <option value="oswald">Oswald</option>
      <option value="poppins">Poppins</option>
      <option value="quicksand">Quicksand</option>
      <option value="roboto">Roboto</option>
      <option value="robotoSlab">Roboto Slab</option>
      <option value="ubuntu">Ubuntu</option>
    </select>
  )
}
