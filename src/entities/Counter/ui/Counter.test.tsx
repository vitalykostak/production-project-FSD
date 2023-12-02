import { fireEvent, screen } from '@testing-library/react'
import renderComponent from 'shared/lib/tests/renderComponent/renderComponent'
import Counter from './Counter'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('Counter', () => {
  let state: DeepPartial<StateSchema> = {}

  beforeEach(() => {
    state = {
      counter: {
        value: 10
      }
    }
  })

  test('Render test', () => {
    renderComponent(<Counter />, { initialState: state })

    const expected = '10'

    expect(screen.getByTestId('value-title')).toHaveTextContent(expected)
  })

  test('Decrement Button', () => {
    renderComponent(<Counter />, { initialState: state })

    const expected = '9'

    fireEvent.click(screen.getByTestId('decrement-button'))
    expect(screen.getByTestId('value-title')).toHaveTextContent(expected)
  })

  test('Increment Button', () => {
    renderComponent(<Counter />, { initialState: state })

    const expected = '11'

    fireEvent.click(screen.getByTestId('increment-button'))
    expect(screen.getByTestId('value-title')).toHaveTextContent(expected)
  })
})
