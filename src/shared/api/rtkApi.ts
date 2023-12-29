import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { USER_LOCAL_STORAGE_KEY } from '@/shared/consts/localStorageKeys'

// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const authToken = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || ''

      if (authToken) {
        headers.set('authorization', authToken)
      }

      return headers
    }
  }),
  endpoints: (builder) => ({})
})
