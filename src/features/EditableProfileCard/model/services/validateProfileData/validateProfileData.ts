import { type Profile } from '@/entities/Profile'

import { ValidateProfileError } from '../../types/profile'

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA]
    }

    const { first, lastName, age, city } = profile

    const errors: ValidateProfileError[] = []

    if (!first || !lastName) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA)
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_USER_AGE)
    }

    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_USER_CITY)
    }

    return errors
}
