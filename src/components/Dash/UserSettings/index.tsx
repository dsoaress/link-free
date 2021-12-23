import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { FiTrash2 } from 'react-icons/fi'
import { HiOutlinePencilAlt } from 'react-icons/hi'

import { api } from 'services/api'
import { useI18n } from 'hooks/useI18n'
import { useCan } from 'hooks/useCan'
import { useAuth } from 'hooks/useAuth'

import { Button } from '../Button'
import { SectionHeader } from '../SectionHeader'
import { AlertModal } from '../AlertModal'

import { AddNewUserModal } from './AddNewUserModal'
import { UserButtonsGroup, UserContent, UserDescription, Users, Wrapper } from './styles'
import { EditUserModal } from './EditUserModal'

import type { User } from 'types/User'

export function UserSettings() {
  const { t } = useI18n()
  const [users, setUsers] = useState<User[]>([])
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false)
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false)
  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User>(users[0])
  const userCan = useCan({ roles: ['ADMIN'] })
  const { user: authenticatedUser } = useAuth()

  useEffect(() => {
    api
      .get('users')
      .then(({ data }) => setUsers(data))
      .catch(err => {
        console.log(err)
        toast.error(t.userSection.errors.failedToFetch)
      })
  }, [t])

  const handleDeleteUser = () => {
    const { id, username } = selectedUser
    const deleting = toast.loading(t.common.deleting)
    setIsDeleteUserModalOpen(false)

    api
      .delete(`users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id))
        toast.success(t.userSection.usersList.userDeleted(username), { id: deleting })
      })
      .catch(err => {
        console.error(err)
        toast.error(t.userSection.usersList.errorDeleting, { id: deleting })
      })
  }

  return (
    <Wrapper>
      <SectionHeader title={t.userSection.title}>
        {userCan && (
          <Button size="small" onClick={() => setIsNewUserModalOpen(true)}>
            {t.userSection.newUserButton}
          </Button>
        )}
      </SectionHeader>
      <Users>
        {users.map(user => (
          <UserContent key={user.id}>
            <UserDescription>
              <p>
                <span>{t.userSection.common.username}: </span>
                {user.username}
              </p>
              <p>
                <span>{t.userSection.common.role}: </span>
                {t.userSection.common[user.role.toLowerCase() as 'editor' | 'admin']}
              </p>
            </UserDescription>

            <UserButtonsGroup>
              {(userCan || user.id === authenticatedUser?.id) && (
                <Button
                  outlined
                  size="small"
                  aria-label={t.userSection.usersList.editUser}
                  onClick={() => {
                    setSelectedUser(user)
                    setIsEditUserModalOpen(true)
                  }}
                >
                  <HiOutlinePencilAlt />
                </Button>
              )}

              {user.id !== 1 && userCan && (
                <Button
                  danger
                  outlined
                  size="small"
                  aria-label={t.userSection.usersList.deleteUser}
                  onClick={() => {
                    setSelectedUser(user)
                    setIsDeleteUserModalOpen(true)
                  }}
                >
                  <FiTrash2 />
                </Button>
              )}
            </UserButtonsGroup>
          </UserContent>
        ))}
      </Users>

      <AddNewUserModal
        isOpen={isNewUserModalOpen}
        onClose={() => setIsNewUserModalOpen(false)}
        setUsers={setUsers}
      />

      <EditUserModal
        isOpen={isEditUserModalOpen}
        onClose={() => setIsEditUserModalOpen(false)}
        user={selectedUser}
      />

      <AlertModal
        title={t.userSection.deleteUserModal.title}
        description={t.userSection.deleteUserModal.description(selectedUser?.username)}
        isOpen={isDeleteUserModalOpen}
        onClose={() => setIsDeleteUserModalOpen(false)}
        callback={() => handleDeleteUser()}
      />
    </Wrapper>
  )
}
