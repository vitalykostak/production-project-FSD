import { type COUNTRY } from '@/entities/Country'
import { type CURRENCY } from '@/entities/Currency'

export interface Profile {
  id?: string
  first?: string
  lastName?: string
  age?: number
  country?: COUNTRY
  currency?: CURRENCY
  city?: string
  username?: string
  avatar?: string
}
