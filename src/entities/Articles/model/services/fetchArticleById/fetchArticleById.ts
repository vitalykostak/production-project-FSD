import { createAsyncThunk } from '@reduxjs/toolkit'

import { type OverriddenThunkConfig } from '@/app/providers/StoreProvider'

import { type Article } from '../../types/articles'

type FetchArticleByIdProps = string

export const fetchArticleById = createAsyncThunk<Article, FetchArticleByIdProps, OverriddenThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const result = await extra.api.get<Article>('/articles/' + articleId, {
                params: { _expand: 'user' },
            })

            if (!result.data) {
                throw new Error()
            }

            return result.data
        } catch (e) {
            return rejectWithValue('error')
        }
    },
)
