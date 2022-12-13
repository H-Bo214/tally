import Nav from '../Nav/Nav'
import { render, screen } from '@testing-library/react'

describe('Nav', () => {
  it('should render the Tally logo', () => {
    render(<Nav />)
    const img = screen.getByRole('img', {
      name: 'Tally inventory tracker logo',
    })
    expect(img).toBeInTheDocument()
  })

  it('should render an inventory list item', () => {
    render(<Nav />)
    const inventory = screen.getByText(/inventory/i)
    expect(inventory).toBeInTheDocument()
  })
  it('should render an orders list item', () => {
    render(<Nav />)
    const orders = screen.getByText(/orders/i)
    expect(orders).toBeInTheDocument()
  })
  it('should render a customers list item', () => {
    render(<Nav />)
    const customers = screen.getByText(/customers/i)
    expect(customers).toBeInTheDocument()
  })
})
