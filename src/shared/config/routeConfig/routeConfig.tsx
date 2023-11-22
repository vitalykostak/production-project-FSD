import { type RouteProps } from 'react-router-dom'
import { AboutPage } from 'pages/About'
import { MainPage } from 'pages/Main'
import { NotFoundPage } from 'pages/NotFound'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePaths.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: routePaths.about,
    element: <AboutPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePaths.not_found,
    element: <NotFoundPage />
  }
}
