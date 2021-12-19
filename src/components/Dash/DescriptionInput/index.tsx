import { useData } from 'hooks/useData'

export function DescriptionInput() {
  const { data, setData } = useData()

  return (
    <textarea
      style={{ height: '200px !important', width: '100% !important' }}
      value={data.settings.description}
      onChange={e =>
        setData({
          ...data,
          settings: {
            ...data.settings,
            description: e.target.value
          }
        })
      }
    />
  )
}
