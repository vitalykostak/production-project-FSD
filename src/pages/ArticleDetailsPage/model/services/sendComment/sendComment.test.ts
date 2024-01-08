import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { type StateSchema } from '@/app/providers/StoreProvider'

import { fetchArticleCommentsByArticleId } from '../fetchArticleCommentsByArticleId/fetchArticleCommentsByArticleId'

import { sendComment } from './sendComment'

jest.mock('../fetchArticleCommentsByArticleId/fetchArticleCommentsByArticleId')
const mockedFetchArticleCommentsByArticleId = jest.mocked(fetchArticleCommentsByArticleId)

describe('sendComment', () => {
    test('sendComment success', async () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: { id: '1' },
            },
            articleDetails: { data: { id: '1' } },
        }

        const thunk = new TestAsyncThunk(sendComment, state)
        const actionProp = 'Example comment text'
        const comment = {
            id: '1',
            text: actionProp,
            user: { id: '1', username: 'User' },
        }
        thunk.api.post.mockReturnValue(
            Promise.resolve({
                data: comment,
            }),
        )
        const result = await thunk.callThunk(actionProp)

        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockedFetchArticleCommentsByArticleId).toHaveBeenCalledWith(
            state.articleDetails?.data?.id,
        )

        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(comment)
    })
})
