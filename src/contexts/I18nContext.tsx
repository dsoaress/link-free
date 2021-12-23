import { createContext, useEffect, useState } from 'react'

import { i18n } from 'i18n'
import { getLocalStorage } from 'utils/localStorage'

import type { ReactNode } from 'react'
import type { I18nOptions, I18nProps } from 'i18n'

type i18nContextType = {
  t: I18nProps
}

type i18nProviderProps = {
  children: ReactNode
}

export const I18nContext = createContext({} as i18nContextType)

export const I18nProvider = ({ children }: i18nProviderProps) => {
  const lang = getLocalStorage<I18nOptions>('lang') || 'en'
  const [t, setT] = useState(i18n[lang])

  useEffect(() => {
    setT(i18n[lang])
  }, [lang])

  return <I18nContext.Provider value={{ t }}>{children}</I18nContext.Provider>
}
