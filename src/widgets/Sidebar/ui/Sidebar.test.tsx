import { fireEvent, screen } from '@testing-library/react'
import renderComponent from 'shared/lib/tests/renderComponent/renderComponent'
import { Sidebar } from 'widgets/Sidebar'

describe('Sidebar', () => {
  test('Render test', () => {
    renderComponent(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Test toggle', () => {
    renderComponent(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()

    const toggleButton = screen.getByTestId('toggle-button')
    fireEvent.click(toggleButton)

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')

    fireEvent.click(toggleButton)
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
  })
})
