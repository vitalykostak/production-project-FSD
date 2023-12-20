import { render, screen } from '@testing-library/react'
import Button, { ButtonTheme } from './Button'

describe('Button', () => {
  test('Render test', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('Test theme "clear"', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass(ButtonTheme.CLEAR)
  })
})
