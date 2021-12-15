import { useRouter } from 'next/router'
import type { Dispatch, SetStateAction } from 'react'

import { useData } from '../../../hooks/useData'
import { api } from '../../../services/api'
import type { Data } from '../../../types/Data'
import { removeLocalStorageData } from '../../../utils/localStorage'
import { Button } from '../../Button'
import { ButtonsGroup, Wrapper } from './styles'

type SaveChangesAlertProps = {
  hasUnsavedChanges: boolean
  setHasUnsavedChanges: Dispatch<SetStateAction<boolean>>
  initialData: Data
}

export function SaveChangesAlert({
  hasUnsavedChanges,
  setHasUnsavedChanges,
  initialData
}: SaveChangesAlertProps) {
  const { push } = useRouter()
  const { data, setData } = useData()

  const handleSave = async () => {
    try {
      await api.put('data', { data })
      removeLocalStorageData()
      setHasUnsavedChanges(false)
      setData(data)
      push('/')
    } catch (error) {
      console.error(error)
    }
  }

  const handleCancel = () => {
    setHasUnsavedChanges(false)
    removeLocalStorageData()
    setData(initialData)
  }

  return (
    <Wrapper show={hasUnsavedChanges}>
      You have unsaved changes.
      <ButtonsGroup>
        <Button
          size="small"
          styleSchema="square"
          colorSchema="rose"
          outline
          onClick={() => handleCancel()}
        >
          Cancel
        </Button>
        <Button size="small" styleSchema="square" colorSchema="slate" onClick={() => handleSave()}>
          Save
        </Button>
      </ButtonsGroup>
    </Wrapper>
  )
}
