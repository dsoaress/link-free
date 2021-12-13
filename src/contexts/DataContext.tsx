import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

import initialData from '../../data/data.json'

type DataType = typeof initialData

type DataContextType = {
  data: DataType
  setData: Dispatch<SetStateAction<DataType>>
}

type DataProviderProps = {
  children: ReactNode
}

const DataContext = createContext({} as DataContextType)

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<DataType>(initialData)

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>
}

export const useData = () => useContext(DataContext)
