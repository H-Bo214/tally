import ProductInventory from './ProductInventory'
import { render, screen } from '@testing-library/react'

describe('ProductInventory', () => {
  it('should render an error message if product fetching fails', () => {
    const emptyProducts = []
    const error =
      'An error occurred getting your products, please refresh the page.'
    render(<ProductInventory products={emptyProducts} error={error} />)
    const message = screen.getByText(error)
    expect(message).toBeInTheDocument()
  })
})
