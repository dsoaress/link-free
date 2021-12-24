import { Textarea } from 'components/Textarea'
import { useData } from 'hooks/useData'

export function DescriptionInput() {
  const { data, setData } = useData()

  return (
    <Textarea
      label="Description"
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
