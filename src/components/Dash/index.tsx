import { isEqual } from 'lodash'
import { useEffect, useState } from 'react'

import { useData } from '../../contexts/DataContext'
import { theme } from '../../styles/stitches.config'
import {
  getLocalStorageData,
  removeLocalStorageData,
  setLocalStorageData
} from '../../utils/localStorage'
import { Home } from '../Home'
import { DescriptionInput } from './DescriptionInput'
import { NameInput } from './NameInput'
import { Content, Preview, Wrapper } from './styles'

export function Dash() {
  const { initialData, data, setData } = useData()
  const [isLoading, setIsLoading] = useState(true)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  useEffect(() => {
    const storageData = getLocalStorageData()

    if (storageData && isLoading) {
      setData(storageData)
    }

    setIsLoading(false)
  }, [isLoading, setData])

  useEffect(() => {
    if (!isEqual(initialData, data)) {
      setHasUnsavedChanges(true)
      setLocalStorageData(data)
    } else {
      setHasUnsavedChanges(false)
      removeLocalStorageData()
    }
  }, [data, initialData])

  const handleChangeBackground = (background: string) => {
    setData({
      ...data,
      settings: { ...data.settings, colors: { ...data.settings.colors, background } }
    })
  }

  const handleChangeButtonsSchema = (schema: string) => {
    setData({ ...data, settings: { ...data.settings, buttonsSchema: schema } })
  }

  const handleChangeOutline = (outline: boolean) => {
    setData({ ...data, settings: { ...data.settings, outline } })
  }

  const handleChangeFont = (font: string) => {
    setData({ ...data, settings: { ...data.settings, font } })
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Wrapper>
      <Content>
        <h1>Dash {hasUnsavedChanges && '- has unsaved changes'}</h1>
        <NameInput />
        <DescriptionInput />

        <select value={data.settings.font} onChange={e => handleChangeFont(e.target.value)}>
          <option value="square">Baloo</option>
          <option value="montserrat">Montserrat</option>
          <option value="roboto">Roboto</option>
        </select>

        <select
          value={data.settings.colors.background}
          onChange={e => handleChangeBackground(e.target.value)}
        >
          {Object.keys(theme.colors).map(color => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>

        <select
          value={data.settings.buttonsSchema}
          onChange={e => handleChangeButtonsSchema(e.target.value)}
        >
          <option value="square">Square</option>
          <option value="rounded">Rounded</option>
          <option value="pill">Pill</option>
        </select>

        <input
          type="checkbox"
          defaultChecked={data.settings.outline}
          onChange={() => handleChangeOutline(!data.settings.outline)}
        />
      </Content>
      <Preview>
        <Home />
      </Preview>
    </Wrapper>
  )
}
