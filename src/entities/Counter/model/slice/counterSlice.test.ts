import { type CounterSchema } from '../types/counterSchema'

import { counterActions, counterReducer } from './counterSlice'

describe('counterSlice', () => {
  test('decrement', () => {
    const state: CounterSchema = {
      value: 10
    }

    const expected = { value: 9 }

    expect(counterReducer(state, counterActions.decrement())).toEqual(expected)
  })

  test('increment', () => {
    const state: CounterSchema = {
      value: 10
    }

    const expected = { value: 11 }

    expect(counterReducer(state, counterActions.increment())).toEqual(expected)
  })

  test('Should work with empty state', () => {
    const expected = { value: 1 }

    expect(counterReducer(undefined, counterActions.increment())).toEqual(
      expected
    )
  })
})
