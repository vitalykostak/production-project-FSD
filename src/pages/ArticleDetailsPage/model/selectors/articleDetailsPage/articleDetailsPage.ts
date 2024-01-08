import { createSelector } from '@reduxjs/toolkit'

import { getArticleDetailsData } from '@/entities/Articles'
import { getUserAuthData } from '@/entities/User'

export const getCanUserEditArticle = createSelector(getUserAuthData, getArticleDetailsData, (authData, articleData) => {
    if (!authData || !articleData) {
        return false
    }

    if (authData?.id === articleData.user?.id) {
        return true
    }
    return false
})
