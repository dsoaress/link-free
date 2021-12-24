import { FaFont } from 'react-icons/fa'

import { useData } from 'hooks/useData'
import { fonts } from 'constants/fonts'
import { Select } from 'components/Select'

import type { Fonts as FontsType } from 'types/Fonts'

export function FontsSelect() {
  const { data, setData } = useData()

  return (
    <Select
      label="Font select"
      icon={FaFont}
      value={data.settings.font}
      onChange={e =>
        setData({
          ...data,
          settings: {
            ...data.settings,
            font: e.target.value as FontsType
          }
        })
      }
      options={Object.entries(fonts).map(([value, { name: label }]) => ({ label, value }))}
    />
  )
}
