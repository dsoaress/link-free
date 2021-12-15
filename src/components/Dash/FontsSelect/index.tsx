import { useData } from '../../../hooks/useData'
import type { Fonts } from '../../../styles/stitches.config'

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
      <option value="baloo">Baloo</option>
      <option value="montserrat">Montserrat</option>
      <option value="roboto">Roboto</option>
    </select>
  )
}
