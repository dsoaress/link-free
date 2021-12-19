import { api } from 'services/api'

import type { User } from 'types/User'

export async function retrieveUser() {
  try {
    const { data } = await api.get<User>('users/me')
    return data
  } catch (error) {
    console.log(error)
  }
}
