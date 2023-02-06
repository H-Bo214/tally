import Button from './Button'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Button', () => {
  it('should render a button', () => {
    render(<Button />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should render a button name', () => {
    render(<Button name={'New Product'} />)
    const name = screen.getByText('New Product')
    expect(name).toBeInTheDocument()
  })

  it('should have className', () => {
    const { container } = render(<Button className='new-product-button' />)
    const element = container.getElementsByClassName('new-product-button')
    expect(element.length).toBe(1)
  })

  it('should fire and event when clicked', () => {
    const addNewProduct = jest.fn()
    render(<Button name={'New Product'} onClick={addNewProduct} />)
    const button = screen.getByRole('button', { name: 'New Product' })
    fireEvent.click(button)
    expect(addNewProduct).toHaveBeenCalledTimes(1)
  })
})
