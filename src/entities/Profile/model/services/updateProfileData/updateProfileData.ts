import { createAsyncThunk } from '@reduxjs/toolkit'
import { type OverriddenThunkConfig } from 'app/providers/StoreProvider'
import { ValidateProfileError, type Profile } from '../../types/profile'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<Profile, undefined, OverriddenThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi

    const formData = getState().profile?.form

    const validationErrors = validateProfileData(formData)

    if (validationErrors.length) {
      return rejectWithValue(validationErrors)
    }

    try {
      const result = await extra.api.put<Profile>('/profile', formData)

      if (!result.data) {
        throw new Error()
      }

      return result.data
    } catch (e) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
  }
)
