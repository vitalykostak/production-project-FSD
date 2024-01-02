import { userActions } from '@/entities/User/testing'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { loginByUsername } from './loginByUsername'

describe('loginByUsername', () => {
  const userLoginProps = { username: 'username', password: '123' }
  const userValue = { id: '1', username: 'username' }

  test('login success', async () => {
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
    const result = await thunk.callThunk(userLoginProps)

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
  })

  test('login error', async () => {
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(userLoginProps)

    expect(result.payload).toBe('error')
    expect(result.meta.requestStatus).toBe('rejected')
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
  })
})
