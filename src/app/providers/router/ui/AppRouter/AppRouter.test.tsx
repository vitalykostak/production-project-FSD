import { screen } from '@testing-library/react'

import renderComponent from '@/shared/lib/tests/renderComponent/renderComponent'
import {
  getAboutRoute,
  getAdminPanelRoute,
  getArticleDetailsRoute,
  getMainRoute
} from '@/shared/consts/router'
import { UserRole } from '@/entities/User/testing'

import AppRouter from './AppRouter'

describe('app/providers/Router', () => {
  test('Should render MainPage', async () => {
    renderComponent(<AppRouter />, { route: getMainRoute() })

    expect(await screen.findByTestId('MainPage')).toBeInTheDocument()
  })
  test('Should render AboutPage', async () => {
    renderComponent(<AppRouter />, { route: getAboutRoute() })

    expect(await screen.findByTestId('AboutPage')).toBeInTheDocument()
  })

  test('Should redirect from ArticleDetailsPage to MainPage if no auth', async () => {
    renderComponent(<AppRouter />, {
      route: getArticleDetailsRoute('1'),
      initialState: {}
    })

    expect(await screen.findByTestId('MainPage')).toBeInTheDocument()
  })

  // TODO find solution

  // test('Should render ArticleDetailsPage if auth', async () => {
  //   renderComponent(<AppRouter />, {
  //     route: getArticleDetailsRoute('1'),
  //     initialState: {
  //       user: {
  //         _initialized: true,
  //         authData: {
  //           id: '1',
  //           roles: [UserRole.USER]
  //         }
  //       }
  //     }
  //   })

  //   expect(await screen.findByTestId('ArticleDetailsPage')).toBeInTheDocument()
  // })

  test('Should redirect from AdminPanelPage to ForbiddenPage if no admin role', async () => {
    renderComponent(<AppRouter />, {
      route: getAdminPanelRoute(),
      initialState: {
        user: {
          _initialized: true,
          authData: {
            id: '1',
            roles: [UserRole.USER]
          }

        }
      }
    })

    expect(await screen.findByTestId('ForbiddenPage')).toBeInTheDocument()
    expect(screen.queryByTestId('AdminPanelPage')).not.toBeInTheDocument()
  })

  test('Should render AdminPanelPage if UserRole.ADMIN', async () => {
    renderComponent(<AppRouter />, {
      route: getAdminPanelRoute(),
      initialState: {
        user: {
          _initialized: true,
          authData: {
            id: '1',
            roles: [UserRole.ADMIN]
          }

        }
      }
    })

    expect(await screen.findByTestId('AdminPanelPage')).toBeInTheDocument()
  })

  test('Should render AdminPanelPage if UserRole.MANAGER', async () => {
    renderComponent(<AppRouter />, {
      route: getAdminPanelRoute(),
      initialState: {
        user: {
          _initialized: true,
          authData: {
            id: '1',
            roles: [UserRole.MANAGER]
          }

        }
      }
    })

    expect(await screen.findByTestId('AdminPanelPage')).toBeInTheDocument()
  })

  test('Should render NotFoundPage route is not defined', async () => {
    renderComponent(<AppRouter />, {
      route: '/route-that-doesnt-exist'
    })

    expect(await screen.findByTestId('NotFoundPage')).toBeInTheDocument()
  })
})
