import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername', () => {
  test('Should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username'
      }
    } as unknown as StateSchema

    expect(getLoginUsername(state as StateSchema)).toEqual('username')
  })

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
