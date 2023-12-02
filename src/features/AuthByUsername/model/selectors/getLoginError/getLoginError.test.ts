import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('getLoginError', () => {
  test('Should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error'
      }
    } as unknown as StateSchema

    expect(getLoginError(state as StateSchema)).toEqual('error')
  })

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getLoginError(state as StateSchema)).toEqual(undefined)
  })
})
