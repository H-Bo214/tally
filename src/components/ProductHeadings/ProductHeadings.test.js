import ProductHeadings from './ProductHeadings'
import { render, screen } from '@testing-library/react'

describe('ProductHeadings', () => {
  beforeEach(() => {
    render(<ProductHeadings />)
  })

  it('should display a Product heading', () => {
    const product = screen.getByText('Product')
    expect(product).toBeInTheDocument()
  })

  it('should display a Description heading', () => {
    const description = screen.getByText('Description')
    expect(description).toBeInTheDocument()
  })

  it('should display a Price heading', () => {
    const price = screen.getByText('Price')
    expect(price).toBeInTheDocument()
  })

  it('should display a Quantity heading', () => {
    const quantity = screen.getByText('Quantity')
    expect(quantity).toBeInTheDocument()
  })

  it('should display a Status heading', () => {
    const status = screen.getByText('Status')
    expect(status).toBeInTheDocument()
  })
})
