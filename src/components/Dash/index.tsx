import { isEqual } from 'lodash'
import { useEffect, useState } from 'react'

import { useData } from 'hooks/useData'
import { getLocalStorage, setLocalStorage } from 'utils/localStorage'
import { Home } from 'components/Home'
import { ColorsSettings } from 'components/Dash/ColorsSettings'
import { DataSettings } from 'components/Dash/NameInput/DataSettings'
import { SaveChangesAlert } from 'components/Dash/SaveChangesAlert'
import { useAuth } from 'hooks/useAuth'

import { Content, Preview, Wrapper } from './styles'
import { UserSettings } from './UserSettings'
import { SocialLinksSettings } from './SocialLinksSettings'
import { Button } from './Button'

import type { Data } from 'types/Data'

type DashProps = {
  initialData: Data
}

export function Dash({ initialData }: DashProps) {
  const { data, setData } = useData()
  const { signOut } = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  useEffect(() => {
    if (isLoading) {
      const storageData = getLocalStorage<Data>('data')
      if (storageData) setData(storageData)
      setIsLoading(false)
    }

    if (!isLoading && !isEqual(initialData, data)) {
      setHasUnsavedChanges(true)
      setLocalStorage('data', data)
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
        <h1>Dash</h1>
        <Button outlined size="small" onClick={() => signOut()}>
          Logout
        </Button>

        <UserSettings />
        <DataSettings />
        <SocialLinksSettings />
        <ColorsSettings />
      </Content>
      <Preview>
        <Home />
      </Preview>
    </Wrapper>
  )
}
