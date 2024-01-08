import { USER_LOCAL_STORAGE_KEY } from '../../../../src/shared/consts/localStorageKeys'
import { type User } from '../../../../src/entities/User/model/types/user'

export const login = (
    username = 'admin',
    password = '123',
): Cypress.Chainable<Cypress.Response<User>> => {
    const body = { username, password }

    return cy.request('POST', 'http://localhost:8000/login', body).then(user => {
        const userResult = user?.body
        window?.localStorage?.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(userResult))
        return userResult
    })
}

export const getByTestId = (testId: string) => cy.get(`[data-testid='${testId}']`)
