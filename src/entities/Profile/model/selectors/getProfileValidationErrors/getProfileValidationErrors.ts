import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileValidationErrors = (state: StateSchema) => state.profile?.validateError
