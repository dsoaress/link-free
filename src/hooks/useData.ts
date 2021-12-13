import { useContext } from 'react'

import { DataContext } from '../contexts/DataContext'

export const useData = () => useContext(DataContext)
