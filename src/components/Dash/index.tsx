import { isEqual } from 'lodash'
import { useEffect, useState } from 'react'
import Collapsible from 'react-collapsible'

import { useData } from 'hooks/useData'
import { getLocalStorageData, setLocalStorageData } from 'utils/localStorage'
import { Home } from 'components/Home'
import { ColorsSettings } from 'components/Dash/ColorsSettings'
import { DataSettings } from 'components/Dash/DataSettings'
import { SaveChangesAlert } from 'components/Dash/SaveChangesAlert'

import { Content, Preview, Wrapper } from './styles'

import type { Data } from 'types/Data'

type DashProps = {
  initialData: Data
}

export function Dash({ initialData }: DashProps) {
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

  return (
    <Wrapper>
      <Content>
        <SaveChangesAlert
          hasUnsavedChanges={hasUnsavedChanges}
          setHasUnsavedChanges={setHasUnsavedChanges}
          initialData={initialData}
        />
        <h1>Dash </h1>

        <DataSettings />
        <ColorsSettings />

        <Collapsible trigger="Start here">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
      </Content>
      <Preview>
        <Home />
      </Preview>
    </Wrapper>
  )
}
