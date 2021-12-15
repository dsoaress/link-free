import { useData } from '../../../hooks/useData'

export function OutlineCheckbox() {
  const { data, setData } = useData()

  return (
    <input
      type="checkbox"
      defaultChecked={data.settings.outline}
      onChange={() =>
        setData({
          ...data,
          settings: {
            ...data.settings,
            outline: !data.settings.outline
          }
        })
      }
    />
  )
}
