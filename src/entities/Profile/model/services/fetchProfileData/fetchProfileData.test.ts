import { fetchProfileData } from './fetchProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { type Profile } from '../../types/profile'
import { CURRENCY } from 'entities/Currency'
import { COUNTRY } from 'entities/Country'

describe('fetchProfileData', () => {
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

  test('fetchProfileData success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profile }))
    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalledTimes(1)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profile)
  })

  test('fetchProfileData error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalledTimes(1)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('error')
  })
})
