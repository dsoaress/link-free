import useSWR from 'swr'

import { fetcher } from '../services/api'
import type { Data } from '../types/Data'
import { useData } from './useData'

export function useFetchData(fallbackData: Data) {
  const { setData } = useData()
  const { data } = useSWR('data', fetcher, {
    refreshInterval: 1000,
    fallbackData
  })

  setData(data)
}
