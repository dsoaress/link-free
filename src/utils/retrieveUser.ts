import type { User } from '@prisma/client'

import { api } from '../services/api'

export async function retrieveUser() {
  try {
    const { data } = await api.get<Omit<User, 'password'>>('users/me')
    return data
  } catch (error) {
    console.log(error)
  }
}
