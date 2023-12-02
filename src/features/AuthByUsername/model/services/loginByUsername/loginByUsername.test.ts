import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

describe('loginByUsername', () => {
  const userLoginProps = { username: 'username', password: '123' }
  const userValue = { id: '1', username: 'username' }

  test('login success', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk(userLoginProps)

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
  })

  test('login error', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk(userLoginProps)

    expect(result.payload).toBe('error')
    expect(result.meta.requestStatus).toBe('rejected')
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
  })
})
