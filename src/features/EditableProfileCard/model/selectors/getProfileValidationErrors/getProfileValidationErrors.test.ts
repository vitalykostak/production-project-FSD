import { type StateSchema } from '@/app/providers/StoreProvider'

import { ValidateProfileError } from '../../types/profile'

import { getProfileValidationErrors } from './getProfileValidationErrors'

describe('getProfileValidationErrors', () => {
  test('Should return value', () => {
    const validationErrors = [ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_USER_AGE, ValidateProfileError.INCORRECT_USER_CITY]

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: validationErrors
      }
    }

    expect(getProfileValidationErrors(state as StateSchema)).toEqual(validationErrors)
  })

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileValidationErrors(state as StateSchema)).toEqual(undefined)
  })
})
