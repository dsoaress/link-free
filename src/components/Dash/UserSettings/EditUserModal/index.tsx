import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { MdOutlinePermContactCalendar } from 'react-icons/md'

import { api } from 'services/api'
import { Input } from 'components/Input'
import { Select } from 'components/Select'
import { useI18n } from 'hooks/useI18n'

import { Can } from '../../Can'
import { Button } from '../../Button'
import { Modal } from '../../Modal'

import { InputsGroup, Wrapper } from './styles'

import type { User } from 'types/User'
import type { Role } from '@prisma/client'
import type { FormEvent, Dispatch, SetStateAction } from 'react'

type EditUserModalProps = {
  isOpen: boolean
  onClose: () => void
  user: User
}

export function EditUserModal({ isOpen, onClose, user }: EditUserModalProps) {
  const { t } = useI18n()
  const [isLoading, setIsLoading] = useState(false)

  const updatedUserObject = {
    ...user,
    oldPassword: '',
    password: ''
  }

  const errorsObject = {
    oldPassword: '',
    password: ''
  }

  const [updatedUser, setUpdatedUser] = useState(updatedUserObject)
  const [errors, setErrors] = useState(errorsObject)

  const hasErrors =
    Object.values(errors).some(error => error !== '') ||
    Object.values(updatedUser).some(value => !value)

  useEffect(() => {
    setUpdatedUser({
      ...user,
      oldPassword: '',
      password: ''
    })
  }, [user])

  useEffect(() => {
    if (updatedUser.password && !updatedUser.oldPassword) {
      setErrors(prev => ({
        ...prev,
        oldPassword: t.userSection.validations.oldPasswordIsRequired
      }))
    } else {
      setErrors(prev => ({ ...prev, oldPassword: '' }))
    }

    if (updatedUser.password.trim() && updatedUser.password.length < 8) {
      setErrors(prev => ({
        ...prev,
        password: t.userSection.validations.passwordIsWeak
      }))
    } else {
      setErrors(prev => ({ ...prev, password: '' }))
    }
  }, [updatedUser, t])

  const handleSaveUpdatedUser = (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const saving = toast.loading(t.common.saving)

    api
      .patch<User>(`users/${user.id}`, updatedUser)
      .then(() => {
        setUpdatedUser(updatedUserObject)
        onClose()
        toast.success(t.userSection.editUserModal.success, { id: saving })
      })
      .catch(err => {
        console.error(err)
        if (err.response.data.error === 'Password does not match') {
          toast.error(t.userSection.editUserModal.passwordDoesNotMatch, { id: saving })
        } else {
          toast.error(t.userSection.editUserModal.error, { id: saving })
        }
      })
      .finally(() => setIsLoading(false))
  }

  const handleClose = () => {
    setUpdatedUser(updatedUserObject)
    setErrors(errorsObject)
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      title={t.userSection.editUserModal.title}
      description={t.userSection.editUserModal.description(updatedUser.username)}
      footer={
        <>
          <Button onClick={handleClose} outlined>
            {t.common.cancel}
          </Button>
          <Button disabled={hasErrors || isLoading} onClick={handleSaveUpdatedUser}>
            {t.common.save}
          </Button>
        </>
      }
    >
      <Wrapper>
        <InputsGroup>
          <Input
            label={t.userSection.common.oldPassword}
            type="password"
            value={updatedUser.oldPassword}
            onChange={e => setUpdatedUser(prev => ({ ...prev, oldPassword: e.target.value }))}
            autoComplete="new-password"
            errorMessage={errors.oldPassword}
          />
          <Input
            label={t.userSection.common.password}
            type="password"
            value={updatedUser.password}
            onChange={e => setUpdatedUser(prev => ({ ...prev, password: e.target.value }))}
            autoComplete="new-password"
            errorMessage={errors.password}
          />
          {user.id !== 1 && (
            <Can roles={['ADMIN']}>
              <Select
                label={t.userSection.common.role}
                icon={MdOutlinePermContactCalendar}
                value={updatedUser.role}
                onChange={e => setUpdatedUser(prev => ({ ...prev, role: e.target.value as Role }))}
                options={[
                  { value: 'EDITOR', label: t.userSection.common.editor },
                  { value: 'ADMIN', label: t.userSection.common.admin }
                ]}
              />
            </Can>
          )}
        </InputsGroup>
      </Wrapper>
    </Modal>
  )
}
