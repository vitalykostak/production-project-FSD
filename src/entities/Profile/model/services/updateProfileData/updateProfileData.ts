import { createAsyncThunk } from '@reduxjs/toolkit'
import { type OverriddenThunkConfig } from 'app/providers/StoreProvider'
import { ValidateProfileError, type Profile } from '../../types/profile'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<
Profile,
string,
OverriddenThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (profileId, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi

  const formData = getState().profile?.form

  const validationErrors = validateProfileData(formData)

  if (validationErrors.length) {
    return rejectWithValue(validationErrors)
  }

  try {
    const result = await extra.api.put<Profile>('/profile/' + profileId, formData)

    if (!result.data) {
      throw new Error()
    }

    return result.data
  } catch (e) {
    return rejectWithValue([ValidateProfileError.SERVER_ERROR])
  }
})
