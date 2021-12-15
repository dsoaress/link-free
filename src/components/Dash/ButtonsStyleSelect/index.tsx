import { useData } from '../../../hooks/useData'
import type { ButtonVariantProps } from '../../Button'

export function ButtonsStyleSelect() {
  const { data, setData } = useData()

  return (
    <select
      value={data.settings.buttonsSchema as string}
      onChange={e =>
        setData({
          ...data,
          settings: {
            ...data.settings,
            buttonsSchema: e.target.value as ButtonVariantProps['styleSchema']
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
