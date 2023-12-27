import { type UserRole } from '../consts'

export interface User {
  id: string
  username: string
  avatar?: string
  roles?: UserRole[]
}

export interface UserSchema {
  _initialized: boolean
  authData?: User
}
