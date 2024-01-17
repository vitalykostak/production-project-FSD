import { AboutPage } from '@/pages/About'
import { MainPage } from '@/pages/Main'
import { NotFoundPage } from '@/pages/NotFound'
import { ProfilePage } from '@/pages/Profile'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { AdminPanelPage } from '@/pages/AdminPanel'
import { UserRole } from '@/entities/User'
import { ForbiddenPage } from '@/pages/Forbidden'
import {
    AppRoutes,
    getAboutRoute,
    getAdminPanelRoute,
    getArticleCreateRoute,
    getArticleDetailsRoute,
    getArticleEditRoute,
    getArticlesRoute,
    getForbiddenRoute,
    getMainRoute,
    getNotFoundRoute,
    getProfileRoute,
    getSettingsRoute,
} from '@/shared/consts/router'
import { SettingsPage } from '@/pages/Settings'

import { type AppRouteProps } from '../types/router'

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: getMainRoute(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getAboutRoute(),
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getProfileRoute(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: getArticlesRoute(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        path: getArticleDetailsRoute(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: getArticleCreateRoute(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: getArticleEditRoute(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getAdminPanelRoute(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },

    [AppRoutes.SETTINGS]: {
        path: getSettingsRoute(),
        element: <SettingsPage />,
    },

    // Forbidden
    [AppRoutes.FORBIDDEN]: {
        path: getForbiddenRoute(),
        element: <ForbiddenPage />,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: getNotFoundRoute(),
        element: <NotFoundPage />,
    },
}
