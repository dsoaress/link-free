import { useData } from '../../../hooks/useData'

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
            font: e.target.value
          }
        })
      }
    >
      <option value="'Baloo Bhaijaan 2', sans-serif">Baloo</option>
      <option value="'Montserrat', sans-serif">Montserrat</option>
      <option value="'Roboto', sans-serif">Roboto</option>
    </select>
  )
}
