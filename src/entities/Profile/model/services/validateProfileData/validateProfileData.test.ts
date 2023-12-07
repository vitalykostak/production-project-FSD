import { validateProfileData } from './validateProfileData'
import { ValidateProfileError, type Profile } from '../../types/profile'
import { CURRENCY } from 'entities/Currency'
import { COUNTRY } from 'entities/Country'

describe('validateProfileData', () => {
  test("incorrect 'first'", async () => {
    const profileIncorrectFirstName: Profile = {
      username: 'username',
      age: 30,
      avatar: '',
      lastName: 'Last name',
      first: '',
      currency: CURRENCY.EUR,
      country: COUNTRY.USA,
      city: 'Night City'
    }

    const result = validateProfileData(profileIncorrectFirstName)

    const expected = [ValidateProfileError.INCORRECT_USER_DATA]

    expect(result).toEqual(expected)
  })

  test("incorrect 'lastName'", async () => {
    const profileIncorrectLastName: Profile = {
      username: 'username',
      age: 30,
      avatar: '',
      lastName: '',
      first: 'First name',
      currency: CURRENCY.EUR,
      country: COUNTRY.USA,
      city: 'Night City'
    }

    const result = validateProfileData(profileIncorrectLastName)

    const expected = [ValidateProfileError.INCORRECT_USER_DATA]

    expect(result).toEqual(expected)
  })

  test("incorrect 'age'", async () => {
    const profileIncorrectAge: Profile = {
      username: 'username',
      age: 30.4,
      avatar: '',
      lastName: 'Last',
      first: 'First name',
      currency: CURRENCY.EUR,
      country: COUNTRY.USA,
      city: 'Night City'
    }

    const result = validateProfileData(profileIncorrectAge)

    const expected = [ValidateProfileError.INCORRECT_USER_AGE]

    expect(result).toEqual(expected)
  })

  test("incorrect 'city'", async () => {
    const profileIncorrectCityUndefined: Profile = {
      username: 'username',
      age: 30,
      avatar: '',
      lastName: 'Last',
      first: 'First name',
      currency: CURRENCY.EUR,
      country: COUNTRY.USA
    }

    const result = validateProfileData(profileIncorrectCityUndefined)

    const expected = [ValidateProfileError.INCORRECT_USER_CITY]

    expect(result).toEqual(expected)
  })

  test("incorrect 'city' and 'lastName'", async () => {
    const profileIncorrectCityUndefined: Profile = {
      username: 'username',
      age: 30,
      avatar: '',
      lastName: '',
      first: 'First name',
      currency: CURRENCY.EUR,
      country: COUNTRY.USA,
      city: ''
    }

    const result = validateProfileData(profileIncorrectCityUndefined)

    const expected = [
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_USER_CITY
    ]

    expect(result).toEqual(expected)
  })
  test('No pass profile object', async () => {
    const result = validateProfileData()

    const expected = [ValidateProfileError.NO_DATA]

    expect(result).toEqual(expected)
  })
})
