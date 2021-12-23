import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { FiLock, FiUser } from 'react-icons/fi'
import { MdOutlinePermContactCalendar } from 'react-icons/md'

import { useDebounce } from 'hooks/useDebounce'
import { api } from 'services/api'
import { Input } from 'components/Input'
import { Select } from 'components/Select'
import { useI18n } from 'hooks/useI18n'

import { Button } from '../../Button'
import { Modal } from '../../Modal'

import { InputsGroup, Wrapper } from './styles'

import type { User } from 'types/User'
import type { FormEvent, Dispatch, SetStateAction } from 'react'

type AddNewUserModalProps = {
  isOpen: boolean
  onClose: () => void
  setUsers: Dispatch<SetStateAction<User[]>>
}

export function AddNewUserModal({ isOpen, onClose, setUsers }: AddNewUserModalProps) {
  const { t } = useI18n()
  const [isLoading, setIsLoading] = useState(false)

  const newUserObject = {
    username: '',
    password: '',
    role: 'EDITOR'
  }

  const errorsObject = {
    username: '',
    password: ''
  }

  const [newUser, setNewUser] = useState(newUserObject)
  const [errors, setErrors] = useState(errorsObject)
  const [loadingMessage, setLoadingMessage] = useState('')
  const debouncedUsername = useDebounce(newUser.username)

  const hasErrors =
    Object.values(errors).some(error => error !== '') ||
    Object.values(newUser).some(value => value.trim() === '')

  useEffect(() => {
    api
      .post('users/check-username', {
        username: debouncedUsername
      })
      .then(({ data }) => {
        if (data.isTaken) {
          setErrors(prev => ({
            ...prev,
            username: t.userSection.validations.userIsTaken
          }))
        } else {
          setErrors(prev => ({ ...prev, username: '' }))
        }
      })
      .catch(err => console.log(err))
      .finally(() => setLoadingMessage(''))
  }, [debouncedUsername, t])

  useEffect(() => {
    if (newUser.username.trim()) {
      setLoadingMessage(t.userSection.validations.checking)
    }
  }, [newUser.username, t])

  useEffect(() => {
    if (newUser.password.trim() && newUser.password.length < 8) {
      setErrors(prev => ({
        ...prev,
        password: t.userSection.validations.passwordIsWeak
      }))
    } else {
      setErrors(prev => ({ ...prev, password: '' }))
    }
  }, [newUser.password, t])

  const handleAddNewUser = (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const saving = toast.loading(t.common.saving)

    api
      .post<User>('users', newUser)
      .then(({ data }) => {
        setUsers(prev => [...prev, data])
        setNewUser(newUserObject)
        onClose()
        toast.success(t.userSection.newUserModal.success, { id: saving })
      })
      .catch(err => {
        console.error(err)
        toast.error(t.userSection.newUserModal.error, { id: saving })
      })
      .finally(() => setIsLoading(false))
  }

  const handleClose = () => {
    setNewUser(newUserObject)
    setErrors(errorsObject)
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      title={t.userSection.newUserModal.title}
      description={t.userSection.newUserModal.description}
      footer={
        <>
          <Button onClick={handleClose} outlined>
            {t.common.cancel}
          </Button>
          <Button disabled={hasErrors || isLoading} onClick={handleAddNewUser}>
            {t.common.save}
          </Button>
        </>
      }
    >
      <Wrapper>
        <InputsGroup>
          <Input
            label={t.userSection.common.username}
            icon={FiUser}
            value={newUser.username}
            onChange={e =>
              setNewUser({
                ...newUser,
                username: e.target.value.trim().toLocaleLowerCase()
              })
            }
            errorMessage={errors.username}
            loadingMessage={loadingMessage}
          />
          <Input
            label={t.userSection.common.password}
            icon={FiLock}
            type="password"
            value={newUser.password}
            onChange={e => setNewUser({ ...newUser, password: e.target.value })}
            autoComplete="new-password"
            errorMessage={errors.password}
          />
          <Select
            label={t.userSection.common.role}
            icon={MdOutlinePermContactCalendar}
            value={newUser.role}
            onChange={e => setNewUser({ ...newUser, role: e.target.value })}
            options={[
              { value: 'EDITOR', label: t.userSection.common.editor },
              { value: 'ADMIN', label: t.userSection.common.admin }
            ]}
          />
        </InputsGroup>
      </Wrapper>
    </Modal>
  )
}
