import { type Profile } from 'entities/Profile'

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
  INCORRECT_USER_CITY = 'INCORRECT_USER_CITY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
  readonly: boolean
  isLoading: boolean
  data?: Profile
  form?: Profile
  error?: string
  validateError?: ValidateProfileError[]
}
