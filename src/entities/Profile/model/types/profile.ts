import { type COUNTRY } from 'entities/Country'
import { type CURRENCY } from 'entities/Currency'

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
  INCORRECT_USER_CITY = 'INCORRECT_USER_CITY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
  first?: string
  lastName?: string
  age?: number
  country?: COUNTRY
  currency?: CURRENCY
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  readonly: boolean
  isLoading: boolean
  data?: Profile
  form?: Profile
  error?: string
  validateError?: ValidateProfileError[]
}
