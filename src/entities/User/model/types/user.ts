export interface User {
  id: string
  username: string
  avatar?: string
  roles?: UserRole[]
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}

export interface UserSchema {
  _initialized: boolean
  authData?: User
}
