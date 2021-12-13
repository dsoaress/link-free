import axios from 'axios'

export const api = axios.create({
  baseURL: '/api'
})

export const fetcher = (url: string) => api.get(url).then(({ data }) => data)
