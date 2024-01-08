import { type StateSchema } from '@/app/providers/StoreProvider'
import { CURRENCY } from '@/entities/Currency/testing'
import { COUNTRY } from '@/entities/Country/testing'
import { type Profile } from '@/entities/Profile/testing'

import { getProfileForm } from './getProfileForm'

describe('getProfileForm', () => {
    test('Should return value', () => {
        const profile: Profile = {
            username: 'Username',
            age: 30,
            avatar: '',
            lastName: 'Last name',
            first: 'Firs name',
            currency: CURRENCY.EUR,
            country: COUNTRY.USA,
            city: 'Night City',
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: profile,
            },
        }

        expect(getProfileForm(state as StateSchema)).toEqual(profile)
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
