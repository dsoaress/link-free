import { api } from 'services/api'

import type { User } from 'types/User'

export async function retrieveUser() {
  try {
    const { data } = await api.get<User>('me')
    return data
  } catch (err) {
    console.log(err)
  }
}
