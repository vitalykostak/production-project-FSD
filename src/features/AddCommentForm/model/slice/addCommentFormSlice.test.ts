import { type AddCommentFormSchema } from '../types/addCommentFormSchema'

import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice'

describe('addCommentFormSlice', () => {
    test('setText', () => {
        const state: DeepPartial<AddCommentFormSchema> = {
            text: undefined,
        }
        const expected: DeepPartial<AddCommentFormSchema> = {
            text: 'Example text',
        }

        expect(addCommentFormReducer(state, addCommentFormActions.setText('Example text'))).toEqual(expected)
    })

    test('setError', () => {
        const state: DeepPartial<AddCommentFormSchema> = {
            error: undefined,
        }
        const expected: DeepPartial<AddCommentFormSchema> = {
            error: 'error',
        }

        expect(addCommentFormReducer(state, addCommentFormActions.setError('error'))).toEqual(expected)
    })
})
