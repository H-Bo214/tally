import Product from './Product'
import { render, screen } from '@testing-library/react'

describe('Product', () => {
  beforeEach(() => {
    const singleProduct = {
      id: 1,
      img: '/productImages/iphone13.png',
      name: 'iPhone 11 Pro Max',
      sku: '5XAZR555511995',
      description:
        'Hollywood-worthy video shooting made easy. A lightning-fast chip. And a big boost in battery life you’ll notice every day.',
      price: '1000',
      quantity: '9',
      status: 'On order',
    }
    render(<Product product={singleProduct} />)
  })

  it('should render a product image', () => {
    const img = screen.getByRole('img', { name: 'iPhone 11 Pro Max' })
    expect(img).toBeInTheDocument()
  })

  it('should display a product name', () => {
    const title = screen.getByRole('heading', { name: 'iPhone 11 Pro Max' })
    expect(title).toBeInTheDocument()
  })

  it('should display a product sku', () => {
    const sku = screen.getByText('5XAZR555511995')
    expect(sku).toBeInTheDocument()
  })

  it('should display a product description', () => {
    const description = screen.getByText(
      'Hollywood-worthy video shooting made easy. A lightning-fast chip. And a big boost in battery life you’ll notice every day.'
    )
    expect(description).toBeInTheDocument()
  })

  it('should display a product price', () => {
    const price = screen.getByText('$1000')
    expect(price).toBeInTheDocument()
  })

  it('should display a product quantity', () => {
    const quantity = screen.getByText('9')
    expect(quantity).toBeInTheDocument()
  })

  it('should display a product status', () => {
    const status = screen.getByText('On order')
    expect(status).toBeInTheDocument()
  })

  it('should display an edit button', () => {
    const button = screen.getByLabelText('edit or delete menu')
    expect(button).toBeInTheDocument()
  })
})
