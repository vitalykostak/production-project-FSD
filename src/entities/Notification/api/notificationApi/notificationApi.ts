import { rtkApi } from '@/shared/api/rtkApi'

import { type Notification } from '../../types/notification'

const notificationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotificationList: build.query<Notification[], undefined>({
      query: (limit) => ({
        url: '/notifications',
        params: {
          _limit: limit
        }
      })
    })
  })
})

export const useGetNotificationListQuery = notificationsApi.useGetNotificationListQuery
