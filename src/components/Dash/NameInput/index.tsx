import { useData } from '../../../hooks/useData'

export function NameInput() {
  const { data, setData } = useData()

  return (
    <input
      value={data.settings.name}
      onChange={e =>
        setData({
          ...data,
          settings: {
            ...data.settings,
            name: e.target.value
          }
        })
      }
    />
  )
}
