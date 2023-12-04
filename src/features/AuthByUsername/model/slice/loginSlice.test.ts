import { type LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice', () => {
  test('setUsername', () => {
    const state: DeepPartial<LoginSchema> = {
      username: ''
    }

    const expected = {
      username: 'username'
    }

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('username'))).toEqual(expected)
  })

  test('setPassword', () => {
    const state: DeepPartial<LoginSchema> = {
      password: ''
    }

    const expected: DeepPartial<LoginSchema> = {
      password: '123'
    }

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual(expected)
  })

  test('Should work with empty state', () => {
    const state: DeepPartial<LoginSchema> = {
    }

    const expectedUsername: DeepPartial<LoginSchema> = { username: 'username' }
    const expectedPassword: DeepPartial<LoginSchema> = { password: '123' }

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('username'))).toEqual(
      expectedUsername
    )
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual(
      expectedPassword
    )
  })
})
