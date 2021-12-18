import { useData } from '../../../hooks/useData'

export function ButtonsStyleSelect() {
  const { data, setData } = useData()

  return (
    <select
      value={data.settings.buttonsSchema}
      onChange={e =>
        setData({
          ...data,
          settings: {
            ...data.settings,
            buttonsSchema: e.target.value as 'square' | 'rounded' | 'pill'
          }
        })
      }
    >
      <option value="square">Square</option>
      <option value="rounded">Rounded</option>
      <option value="pill">Pill</option>
    </select>
  )
}
