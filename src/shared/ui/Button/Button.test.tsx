import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui'

describe('Button', () => {
  test('Render test', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('Test theme "clear"', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass(ThemeButton.CLEAR)
  })
})
