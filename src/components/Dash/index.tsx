import { isEqual } from 'lodash'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { useData } from '../../hooks/useData'
import { api } from '../../services/api'
import type { Colors, Fonts } from '../../styles/stitches.config'
import { theme } from '../../styles/stitches.config'
import type { Data } from '../../types/Data'
import {
  getLocalStorageData,
  removeLocalStorageData,
  setLocalStorageData
} from '../../utils/localStorage'
import type { ButtonVariantProps } from '../Button'
import { Home } from '../Home'
import { DescriptionInput } from './DescriptionInput'
import { NameInput } from './NameInput'
import { Content, Preview, Wrapper } from './styles'

type DashProps = {
  initialData: Data
}

export function Dash({ initialData }: DashProps) {
  const { push } = useRouter()
  const { data, setData } = useData()
  const [isLoading, setIsLoading] = useState(true)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  useEffect(() => {
    if (isLoading) {
      const storageData = getLocalStorageData()
      if (storageData) setData(storageData)
      else setData(initialData)

      setIsLoading(false)
    }

    if (!isLoading && !isEqual(initialData, data)) {
      setHasUnsavedChanges(true)
      setLocalStorageData(data)
    } else {
      setHasUnsavedChanges(false)
    }
  }, [data, initialData, isLoading, setData])

  const handleSave = async () => {
    try {
      await api.put('data', { data })
      removeLocalStorageData()
      setHasUnsavedChanges(false)
      push('/')
    } catch (error) {
      console.error(error)
    }
  }

  const handleChangeBackground = (background: Colors) => {
    setData({
      ...data,
      settings: { ...data.settings, colors: { ...data.settings.colors, background } }
    })
  }

  const handleChangeButtonsSchema = (schema: ButtonVariantProps['schema']) => {
    setData({ ...data, settings: { ...data.settings, buttonsSchema: schema } })
  }

  const handleChangeOutline = (outline: ButtonVariantProps['outline']) => {
    setData({ ...data, settings: { ...data.settings, outline } })
  }

  const handleChangeFont = (font: Fonts) => {
    setData({ ...data, settings: { ...data.settings, font } })
  }

  return (
    <Wrapper>
      <Content>
        <h1>
          Dash{' '}
          {hasUnsavedChanges && (
            <>
              - has unsaved changes <button onClick={() => handleSave()}>save</button>
            </>
          )}
        </h1>
        <NameInput />
        <DescriptionInput />

        <select
          value={data.settings.font}
          onChange={e => handleChangeFont(e.target.value as Fonts)}
        >
          <option value="square">Baloo</option>
          <option value="montserrat">Montserrat</option>
          <option value="roboto">Roboto</option>
        </select>

        <select
          value={data.settings.colors.background}
          onChange={e => handleChangeBackground(e.target.value as Colors)}
        >
          {Object.keys(theme.colors).map(color => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>

        <select
          value={data.settings.buttonsSchema as string}
          onChange={e => handleChangeButtonsSchema(e.target.value as ButtonVariantProps['schema'])}
        >
          <option value="square">Square</option>
          <option value="rounded">Rounded</option>
          <option value="pill">Pill</option>
        </select>

        <input
          type="checkbox"
          defaultChecked={data.settings.outline as boolean}
          onChange={() =>
            handleChangeOutline(!data.settings.outline as ButtonVariantProps['outline'])
          }
        />
      </Content>
      <Preview>
        <Home />
      </Preview>
    </Wrapper>
  )
}
