import { createAsyncThunk } from '@reduxjs/toolkit'
import { type OverriddenThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from 'entities/Profile'

export const fetchProfileData = createAsyncThunk<Profile, string, OverriddenThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
      const result = await extra.api.get<Profile>('/profile/' + profileId)

      if (!result.data) {
        throw new Error()
      }

      return result.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
