export const en = {
  common: {
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    saving: 'Saving...',
    deleting: 'Deleting...'
  },
  userSection: {
    title: 'User management',
    newUserButton: 'New user',
    usersList: {
      title: 'Users list',
      deleteUser: 'Delete user',
      editUser: 'Edit user',
      userDeleted: (user: string) => `User "${user}" deleted.`,
      errorDeleting: 'Error deleting user.'
    },
    editUserModal: {
      title: 'Edit user',
      description: (user: string) => `Edit "${user}" user`,
      success: 'User data updated.',
      passwordDoesNotMatch: 'Password does not match.',
      error: 'Error updating user data. Please try again later.'
    },
    newUserModal: {
      title: 'Add new user',
      description: 'Add new user to the system',
      success: 'User has been added successfully.',
      error: 'Error while adding user. Please try again later.'
    },
    deleteUserModal: {
      title: 'Are you sure?',
      description: (user: string) => `Deleting user "${user}" is an action that cannot be undone`
    },
    common: {
      username: 'Username',
      oldPassword: 'Old password',
      password: 'Password',
      role: 'Role',
      editor: 'Editor',
      admin: 'Administrator'
    },
    validations: {
      checking: 'Checking username...',
      userIsTaken: 'User is already taken.',
      oldPasswordIsRequired: 'Old password is required.',
      passwordIsWeak: 'Password must be at least 8 characters long.'
    },
    errors: {
      failedToFetch: 'Failed to fetch users. Are you sure you have internet connection?'
    }
  }
}
