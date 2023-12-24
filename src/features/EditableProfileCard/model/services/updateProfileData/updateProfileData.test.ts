import { updateProfileData } from './updateProfileData'

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { ValidateProfileError } from '../../types/profile'
import { CURRENCY } from 'entities/Currency'
import { COUNTRY } from 'entities/Country'
import { type Profile } from 'entities/Profile'

describe('updateProfileData.test', () => {
  const profile: Profile = {
    username: 'Username',
    age: 30,
    avatar: '',
    lastName: 'Last name',
    first: 'Firs name',
    currency: CURRENCY.EUR,
    country: COUNTRY.USA,
    city: 'Night City'
  }

  test('updateProfileData success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profile
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profile }))
    const result = await thunk.callThunk('1')

    expect(thunk.api.put).toHaveBeenCalledTimes(1)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profile)
  })

  test("updateProfileData invalid 'lastName'", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...profile, lastName: '' }
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profile }))
    const result = await thunk.callThunk('1')

    expect(thunk.api.put).not.toHaveBeenCalled()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })

  test("updateProfileData invalid 'lastName' and 'city'", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...profile, lastName: '', city: undefined }
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profile }))
    const result = await thunk.callThunk('1')

    expect(thunk.api.put).not.toHaveBeenCalled()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_USER_CITY
    ])
  })

  test('updateProfileData error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profile
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 404 }))
    const result = await thunk.callThunk('1')

    expect(thunk.api.put).toHaveBeenCalledTimes(1)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
  })
})
