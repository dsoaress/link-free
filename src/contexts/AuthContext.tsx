import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect, createContext, useState } from 'react'

import { api } from 'services/api'
import { destroyCookies, setCookies } from 'utils/cookies'
import { retrieveUser } from 'utils/retrieveUser'

import type { ReactNode } from 'react'
import type { User } from 'types/User'

type AuthContextType = {
  user?: User
  signIn: (username: string, password: string) => Promise<void>
  signOut: () => void
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>()
  const { push } = useRouter()

  useEffect(() => {
    const { accessToken } = parseCookies()
    if (accessToken) {
      retrieveUser().then(data => setUser(data))
    }
  }, [])

  const signIn = async (username: string, password: string) => {
    try {
      const { data: signInData } = await api.post('auth', {
        username,
        password
      })

      setCookies({
        accessToken: signInData.accessToken,
        refreshToken: signInData.refreshToken
      })

      retrieveUser()
        .then(data => setUser(data))
        .then(() => push('/dash'))
    } catch (err) {
      console.error(err)
    }
  }

  const signOut = () => {
    destroyCookies()
    setUser(undefined)
    push('/')
  }

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}
