import { isEqual } from 'lodash'
import { useEffect, useState } from 'react'

import { useData } from '../../hooks/useData'
import type { Data } from '../../types/Data'
import { getLocalStorageData, setLocalStorageData } from '../../utils/localStorage'
import { Home } from '../Home'
import { ColorsSettings } from './ColorsSettings'
import { DataSettings } from './DataSettings'
import { SaveChangesAlert } from './SaveChangesAlert'
import { Content, Preview, Wrapper } from './styles'

type DashProps = {
  initialData: Data
}

export function Dash({ initialData }: DashProps) {
  const { data, setData } = useData()
  const [isLoading, setIsLoading] = useState(true)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
  const [activeTab, setActiveTab] = useState<'data' | 'colors'>('data')

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

  const tabs = [
    { label: 'Data', value: 'data' },
    { label: 'Colors', value: 'colors' }
  ]
  const body = { data: <DataSettings />, colors: <ColorsSettings /> }

  return (
    <Wrapper>
      <Content>
        <SaveChangesAlert
          hasUnsavedChanges={hasUnsavedChanges}
          setHasUnsavedChanges={setHasUnsavedChanges}
          initialData={initialData}
        />
        <h1>Dash </h1>

        {tabs.map(tab => (
          <button key={tab.value} onClick={() => setActiveTab(tab.value as 'data' | 'colors')}>
            {tab.label}
          </button>
        ))}

        {body[activeTab]}
      </Content>
      <Preview>
        <Home />
      </Preview>
    </Wrapper>
  )
}
