import { createContext, useState } from 'react'

import type { Dispatch, ReactNode, SetStateAction } from 'react'
import type { Data } from 'types/Data'

type DataContextType = {
  data: Data
  setData: Dispatch<SetStateAction<Data>>
}

type DataProviderProps = {
  children: ReactNode
  initialData: Data
}

export const DataContext = createContext({} as DataContextType)

export const DataProvider = ({ children, initialData }: DataProviderProps) => {
  const [data, setData] = useState<Data>(initialData)

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>
}
