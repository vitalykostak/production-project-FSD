import { type COUNTRY, type CURRENCY } from 'shared/consts/common'

export interface Profile {
  first: string
  lastName: string
  age: number
  country: COUNTRY
  currency: CURRENCY
  city: string
  username: string
  avatar: string
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
}
