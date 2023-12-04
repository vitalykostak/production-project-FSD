import { createAsyncThunk } from '@reduxjs/toolkit'
import { type OverriddenThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<Profile, undefined, OverriddenThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
      const result = await extra.api.get<Profile>('/profile')

      if (!result.data) {
        throw new Error()
      }

      return result.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
