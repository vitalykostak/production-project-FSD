import {
    bindActionCreators,
    createSlice,
    type SliceCaseReducers,
    type CreateSliceOptions,
    type CaseReducerActions,
    type ActionCreatorsMapObject,
} from '@reduxjs/toolkit'
import { useMemo } from 'react'

import { useAppDispatch } from '../hooks'

export const buildSlice = <State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(
    options: CreateSliceOptions<State, CaseReducers, Name>,
) => {
    const slice = createSlice(options)

    const useActions = () => {
        const dispatch = useAppDispatch()

        const boundActionCreators = useMemo(
            () =>
                bindActionCreators<
                    ActionCreatorsMapObject<CaseReducerActions<CaseReducers, Name>>,
                    ActionCreatorsMapObject<CaseReducerActions<CaseReducers, Name>>
                    // @ts-expect-error some shit with types
                >(slice.actions, dispatch),
            [dispatch],
        )
        return boundActionCreators
    }

    return {
        ...slice,
        useActions,
    }
}
