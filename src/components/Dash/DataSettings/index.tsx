import { useData } from 'hooks/useData'
import { DescriptionInput } from 'components/Dash/DescriptionInput'
import { FontsSelect } from 'components/Dash/FontsSelect'
import { NameInput } from 'components/Dash/NameInput'
import { Input } from 'components/Input'
import { api } from 'services/api'

import type { ChangeEvent } from 'react'

export function DataSettings() {
  const { data, setData } = useData()

  const handleUpdate = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const formData = new FormData()
      formData.append('file', e.target.files[0])

      try {
        const response = await api.post('file-upload', formData)

        setData({
          ...data,
          settings: {
            ...data.settings,
            avatar: response.data.file
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <>
      <div>
        <NameInput />
        <DescriptionInput />
        <FontsSelect />
      </div>

      <Input type="file" onChange={handleUpdate} />

      <Input
        label="Border radius"
        type="number"
        min={0}
        step={1}
        value={+data.settings.buttonBorderRadius}
        onChange={e =>
          setData({
            ...data,
            settings: {
              ...data.settings,
              buttonBorderRadius: e.target.value
            }
          })
        }
      />
    </>
  )
}
