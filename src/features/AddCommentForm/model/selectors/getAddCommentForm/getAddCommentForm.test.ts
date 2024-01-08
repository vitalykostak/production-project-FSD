import { type StateSchema } from '@/app/providers/StoreProvider'

import { getAddCommentFormError, getAddCommentFormText } from './getAddCommentForm'

describe('getAddCommentForm', () => {
    test('Should return value "text"', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'Example text',
            },
        }

        expect(getAddCommentFormText(state as StateSchema)).toEqual('Example text')
    })

    test('Should return value "error"', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        }

        expect(getAddCommentFormError(state as StateSchema)).toEqual('error')
    })

    test('Should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}

        expect(getAddCommentFormText(state as StateSchema)).toEqual('')
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined)
    })
})
