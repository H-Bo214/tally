import Header from '../Header/Header'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  it('should render a user image', () => {
    render(<Header />)
    const img = screen.getByRole('img', {
      name: 'current user',
    })
    expect(img).toBeInTheDocument()
  })
  it("should render the user's name", () => {
    render(<Header />)
    const user = screen.getByText(/Samantha Anderson/i)
    expect(user).toBeInTheDocument()
  })
  it('should render the company name', () => {
    render(<Header />)
    const company = screen.getByText(/Tech Warehouse/i)
    expect(company).toBeInTheDocument()
  })
})
