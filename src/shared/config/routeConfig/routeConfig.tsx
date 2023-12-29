import { type RouteProps } from 'react-router-dom'
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

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'articles_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',

  // last
  NOT_FOUND = 'not_found',
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLES_DETAILS]: '/articles/',
  [AppRoutes.ARTICLE_CREATE]: '/article_create',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRoutes.ADMIN_PANEL]: '/admin_panel',
  [AppRoutes.FORBIDDEN]: '/forbidden',

  // last
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePaths.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: routePaths.about,
    element: <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path: routePaths.profile + ':id',
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoutes.ARTICLES]: {
    path: routePaths.articles,
    element: <ArticlesPage />
  },
  [AppRoutes.ARTICLES_DETAILS]: {
    path: routePaths.articles_details + ':id',
    element: <ArticleDetailsPage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: routePaths.article_create,
    element: <ArticleEditPage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: routePaths.article_edit,
    element: <ArticleEditPage />,
    authOnly: true
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: routePaths.admin_panel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN]
  },

  // Forbidden
  [AppRoutes.FORBIDDEN]: {
    path: routePaths.forbidden,
    element: <ForbiddenPage />
  },

  // last
  [AppRoutes.NOT_FOUND]: {
    path: routePaths.not_found,
    element: <NotFoundPage />
  }
}
