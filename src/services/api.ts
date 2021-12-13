import axios from 'axios'

const { RAILWAY_STATIC_URL } = process.env

export const api = axios.create({
  baseURL: `${RAILWAY_STATIC_URL}/api` || 'http://localhost:3000/api'
})
