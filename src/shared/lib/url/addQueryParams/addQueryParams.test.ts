import { getQueryParamsAndMergeNew } from './addQueryParams'

describe('getQueryParamsAndMergeNew', () => {
  test('should work with one param', () => {
    const params = {
      first: 'test_one'
    }

    expect(getQueryParamsAndMergeNew(params)).toBe('?first=test_one')
  })

  test('should work with multiple params', () => {
    const params = {
      first: 'test_one',
      second: 'second_one',
      third: 'third_one'
    }

    expect(getQueryParamsAndMergeNew(params)).toBe('?first=test_one&second=second_one&third=third_one')
  })

  test('should work with including undefined param', () => {
    const params = {
      first: 'test_one',
      second: undefined,
      third: 'third_one'
    }

    expect(getQueryParamsAndMergeNew(params)).toBe('?first=test_one&third=third_one')
  })
})
