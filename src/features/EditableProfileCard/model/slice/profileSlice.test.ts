import { CURRENCY } from '@/entities/Currency/testing'
import { COUNTRY } from '@/entities/Country/testing'
import { type Profile } from '@/entities/Profile/testing'

import { type ProfileSchema, ValidateProfileError } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'

import { profileActions, profileReducer } from './profileSlice'

describe('profileSlice', () => {
    test('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: true,
        }

        const expected: DeepPartial<ProfileSchema> = {
            readonly: false,
        }

        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false))).toEqual(
            expected,
        )
    })

    test('updateProfile', () => {
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

        const state: DeepPartial<ProfileSchema> = {
            form: {
                ...profile,
            },
        }

        const changedProfile = {
            username: 'Username_changed',
            age: 32,
            avatar: '',
            lastName: 'Last name_changed',
            first: 'Firs name_changed',
            currency: CURRENCY.EUR,
            country: COUNTRY.USA,
            city: 'Night City_changed',
        }

        const expected: DeepPartial<ProfileSchema> = {
            form: {
                ...changedProfile,
            },
        }

        expect(
            profileReducer(state as ProfileSchema, profileActions.updateProfile(changedProfile)),
        ).toEqual(expected)
    })

    test('cancelUpdate', () => {
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

        const changedProfile = {
            username: 'Username_changed',
            age: 32,
            avatar: '',
            lastName: 'Last name_changed',
            first: 'Firs name_changed',
            currency: CURRENCY.EUR,
            country: COUNTRY.USA,
            city: 'Night City_changed',
        }

        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            error: 'error',
            form: changedProfile,
            data: profile,
            validateError: [ValidateProfileError.INCORRECT_USER_AGE],
        }

        const expected: DeepPartial<ProfileSchema> = {
            readonly: true,
            error: undefined,
            form: profile,
            data: profile,
            validateError: undefined,
        }

        expect(profileReducer(state as ProfileSchema, profileActions.cancelUpdate())).toEqual(
            expected,
        )
    })

    test('fetchProfileData.pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            error: 'error',
        }

        const expected: DeepPartial<ProfileSchema> = {
            isLoading: true,
            error: undefined,
        }

        expect(profileReducer(state as ProfileSchema, fetchProfileData.pending)).toEqual(expected)
    })

    test('fetchProfileData.fulfilled', () => {
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

        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            error: undefined,
            data: undefined,
            form: undefined,
        }

        const expected: DeepPartial<ProfileSchema> = {
            isLoading: false,
            error: undefined,
            data: profile,
            form: profile,
        }

        expect(
            profileReducer(state as ProfileSchema, fetchProfileData.fulfilled(profile, '', '1')),
        ).toEqual(expected)
    })
})
