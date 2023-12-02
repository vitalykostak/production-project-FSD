import { createAsyncThunk } from '@reduxjs/toolkit'
import { userActions, type User } from 'entities/User'
import axios from 'axios'
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorageKeys'

interface LoginByUsernameProps {
  username: string
  password: string
}

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  rejectValue: string
}>()

export const loginByUsername = createAppAsyncThunk<User, LoginByUsernameProps>(
  'login/loginByUserName',
  async (authData, thunkApi) => {
    try {
      const result = await axios.post<User>(
        'http://localhost:8000/login',
        authData
      )

      if (!result.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(result.data))
      thunkApi.dispatch(userActions.setAuthData(result.data))

      return result.data
    } catch (e) {
      console.log({ e })
      return thunkApi.rejectWithValue('error')
    }
  }
)
