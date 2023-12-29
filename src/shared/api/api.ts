import axios from 'axios'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorageKeys'

export const $api = axios.create({
  baseURL: API_URL,
  headers: {
    authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY) || ''
  }
})

$api.interceptors.request.use(config => {
  if (config.headers) {
    config.headers.authorization = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || ''
  }

  return config
})
