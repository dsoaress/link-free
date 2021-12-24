import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { useState } from 'react'

import { useData } from 'hooks/useData'
import { api } from 'services/api'
import { removeLocalStorage } from 'utils/localStorage'
import { useI18n } from 'hooks/useI18n'

import { Button } from '../Button'
import { AlertModal } from '../AlertModal'

import { ButtonsGroup, Wrapper } from './styles'

import type { Data } from '../../../types/Data'
import type { Dispatch, SetStateAction } from 'react'

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
  const { t } = useI18n()
  const [isDeleteUnsavedDataModalOpen, setIsDeleteUnsavedDataModalOpen] = useState(false)

  const handleSave = () => {
    const saving = toast.loading(t.common.saving)

    api
      .put('data', { data })
      .then(() => {
        removeLocalStorage('data')
        setHasUnsavedChanges(false)
        toast.success(t.userSection.editUserModal.success, { id: saving })
        setData(data)
        push('/')
      })
      .catch(err => {
        console.error(err)
        toast.error(t.userSection.editUserModal.error, { id: saving })
      })
  }

  const handleCancel = () => {
    setHasUnsavedChanges(false)
    removeLocalStorage('data')
    setData(initialData)
  }

  return hasUnsavedChanges ? (
    <>
      <Wrapper>
        You have unsaved changes.
        <ButtonsGroup>
          <Button
            size="small"
            outlined
            danger
            onClick={() => setIsDeleteUnsavedDataModalOpen(true)}
          >
            Cancel
          </Button>
          <Button size="small" onClick={() => handleSave()}>
            Save
          </Button>
        </ButtonsGroup>
      </Wrapper>

      <AlertModal
        title={t.userSection.deleteUserModal.title}
        description={'teste'}
        isOpen={isDeleteUnsavedDataModalOpen}
        onClose={() => setIsDeleteUnsavedDataModalOpen(false)}
        callback={() => handleCancel()}
      />
    </>
  ) : null
}
