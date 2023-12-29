import { type StateSchema } from '@/app/providers/StoreProvider'
import { getCounter } from './getCounter'

describe('getCounter', () => {
  const state: DeepPartial<StateSchema> = {
    counter: {
      value: 10
    }
  }

  test('Should return counter', () => {
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
  })
})
