import { createSelector } from '@reduxjs/toolkit'

import MainIconDeprecated from '@/shared/assets/icons/main.svg'
import AboutIconDeprecated from '@/shared/assets/icons/about.svg'
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg'
import ArticlesIconDeprecated from '@/shared/assets/icons/articles.svg'
import MainIcon from '@/shared/assets/icons/home.svg'
import AboutIcon from '@/shared/assets/icons/Info.svg'
import ProfileIcon from '@/shared/assets/icons/avatar.svg'
import ArticlesIcon from '@/shared/assets/icons/article.svg'
import { getUserAuthData } from '@/entities/User'
import {
    getAboutRoute,
    getArticlesRoute,
    getMainRoute,
    getProfileRoute,
} from '@/shared/consts/router'
import { toggleFeature } from '@/shared/lib/featureFlags'

export const getSidebarItems = createSelector(getUserAuthData, authData => {
    return [
        {
            path: getMainRoute(),
            Icon: toggleFeature({
                featureFlag: 'isAppRedesigned',
                onDisabled: () => MainIconDeprecated,
                onEnabled: () => MainIcon,
            }),
            text: 'main:main',
        },
        {
            path: getAboutRoute(),
            Icon: toggleFeature({
                featureFlag: 'isAppRedesigned',
                onDisabled: () => AboutIconDeprecated,
                onEnabled: () => AboutIcon,
            }),
            text: 'about:about',
        },
        {
            path: getProfileRoute(authData?.id || ''),
            Icon: toggleFeature({
                featureFlag: 'isAppRedesigned',
                onDisabled: () => ProfileIconDeprecated,
                onEnabled: () => ProfileIcon,
            }),
            text: 'profile:profile',
            authOnly: true,
        },
        {
            path: getArticlesRoute(),
            Icon: toggleFeature({
                featureFlag: 'isAppRedesigned',
                onDisabled: () => ArticlesIconDeprecated,
                onEnabled: () => ArticlesIcon,
            }),
            text: 'article:articles',
            authOnly: true,
        },
    ]
})
