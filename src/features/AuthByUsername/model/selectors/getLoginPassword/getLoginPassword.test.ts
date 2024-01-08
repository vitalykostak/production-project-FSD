import { type StateSchema } from '@/app/providers/StoreProvider'

import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword', () => {
    test('Should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '1234',
            },
        } as unknown as StateSchema

        expect(getLoginPassword(state as StateSchema)).toEqual('1234')
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })
})
