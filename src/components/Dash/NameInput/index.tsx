import { Input } from 'components/Input'
import { useData } from 'hooks/useData'

export function NameInput() {
  const { data, setData } = useData()

  return (
    <Input
      label="Name"
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
