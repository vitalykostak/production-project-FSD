import { createSelector } from '@reduxjs/toolkit'

import MainIcon from '@/shared/assets/icons/main.svg'
import AboutIcon from '@/shared/assets/icons/about.svg'
import ProfileIcon from '@/shared/assets/icons/profile.svg'
import ArticlesIcon from '@/shared/assets/icons/articles.svg'
import { getUserAuthData } from '@/entities/User'
import {
    getAboutRoute,
    getArticlesRoute,
    getMainRoute,
    getProfileRoute,
} from '@/shared/consts/router'

export const getSidebarItems = createSelector(getUserAuthData, authData => {
    return [
        {
            path: getMainRoute(),
            Icon: MainIcon,
            text: 'main:main',
        },
        {
            path: getAboutRoute(),
            Icon: AboutIcon,
            text: 'about:about',
        },
        {
            path: getProfileRoute(authData?.id || ''),
            Icon: ProfileIcon,
            text: 'profile:profile',
            authOnly: true,
        },
        {
            path: getArticlesRoute(),
            Icon: ArticlesIcon,
            text: 'article:articles',
            authOnly: true,
        },
    ]
})
