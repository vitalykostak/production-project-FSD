import { createAsyncThunk } from '@reduxjs/toolkit'

import { type OverriddenThunkConfig } from '@/app/providers/StoreProvider'
import { getArticleDetailsData } from '@/entities/Articles'
import { type Comment } from '@/entities/Comment'
import { getUserAuthData } from '@/entities/User'

import { fetchArticleCommentsByArticleId } from '../fetchArticleCommentsByArticleId/fetchArticleCommentsByArticleId'

export const sendComment = createAsyncThunk<Comment, string, OverriddenThunkConfig<string>>(
    'articleDetailsPage/sendComment',
    async (addCommentFormText, thunkApi) => {
        const { extra, dispatch, rejectWithValue, getState } = thunkApi

        const userData = getUserAuthData(getState())

        const article = getArticleDetailsData(getState())

        if (!userData?.id || !addCommentFormText || !article?.id) {
            return rejectWithValue('no data')
        }

        try {
            const result = await extra.api.post<Comment>('/comments', {
                text: addCommentFormText,
                articleId: article?.id,
                userId: userData.id,
            })

            if (!result.data) {
                throw new Error()
            }

            void dispatch(fetchArticleCommentsByArticleId(article?.id))

            return result.data
        } catch (e) {
            return rejectWithValue('error')
        }
    },
)
