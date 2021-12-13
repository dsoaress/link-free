import type { Dispatch, ReactNode, SetStateAction } from 'React'
import { createContext, useState } from 'react'

import initialData from '../../temp/data.json'
import type { Data } from '../types/Data'

type DataContextType = {
  data: Data
  setData: Dispatch<SetStateAction<Data>>
}

type DataProviderProps = {
  children: ReactNode
}

export const DataContext = createContext({} as DataContextType)

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<Data>(initialData as Data)

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>
}
