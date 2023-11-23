import { fireEvent, screen } from '@testing-library/react'
import renderWithTranslation from 'shared/lib/renderWithTranslation/renderWithTranslation'
import { Sidebar } from 'widgets/Sidebar'

describe('Sidebar', () => {
  test('Render test', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Test toggle', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()

    const toggleButton = screen.getByTestId('toggle-button')
    fireEvent.click(toggleButton)

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')

    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
  })
})
