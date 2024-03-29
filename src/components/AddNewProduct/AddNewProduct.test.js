import AddNewProduct from './AddNewProduct'
import { render, screen, fireEvent } from '@testing-library/react'

describe('AddNewProduct', () => {
  it('should render a heading', () => {
    render(<AddNewProduct />)
    const h2 = screen.getByText(/Inventory/i)
    expect(h2).toBeInTheDocument()
  })

  it('should render a + New Product button', () => {
    render(<AddNewProduct />)
    const button = screen.getByRole('button', { name: 'New product' })
    expect(button).toBeInTheDocument()
  })

  it('should call a function when clicking + New Product', () => {
    const setFormModalIsOpen = jest.fn()
    render(<AddNewProduct setFormModalIsOpen={setFormModalIsOpen} />)
    const button = screen.getByRole('button', { name: 'New product' })
    fireEvent.click(button)
    expect(setFormModalIsOpen).toHaveBeenCalledTimes(1)
  })
})
