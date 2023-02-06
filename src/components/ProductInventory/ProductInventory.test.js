import ProductInventory from './ProductInventory'
import { render, screen } from '@testing-library/react'
import { products } from '../../testData'

describe('ProductInventory', () => {
  it('should render product headings', () => {
    render(<ProductInventory />)
    const prod = screen.getByText('Product')
    const description = screen.getByText('Description')
    const price = screen.getByText('Price')
    const quantity = screen.getByText('Quantity')
    const status = screen.getByText('Status')
    expect(prod).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(price).toBeInTheDocument()
    expect(quantity).toBeInTheDocument()
    expect(status).toBeInTheDocument()
  })

  it('should render an error message if product fetching fails', () => {
    const emptyProducts = []
    const error =
      'An error occurred getting your products, please refresh the page.'
    render(<ProductInventory products={emptyProducts} error={error} />)
    const message = screen.getByText(error)
    expect(message).toBeInTheDocument()
  })

  it('should render a list of products when data is provided.', () => {
    render(<ProductInventory products={products} />)
    expect(products).toHaveLength(3)
  })
})
