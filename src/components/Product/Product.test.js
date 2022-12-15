import Product from './Product'
import { render, screen } from '@testing-library/react'

describe('Product', () => {
  const singleProduct = {
    id: 1,
    img: '/productImages/iphone13.png',
    name: 'iPhone 511 Pro Max',
    sku: '5555555',
    description:
      'Hollywood-worthy video shooting made easy. A lightning-fast chip. And a big boost in battery life you’ll notice every day.',
    price: '5000',
    quantity: '9',
    status: 'On order',
  }
  render(<Product product={singleProduct} />)

  it('should render an image', () => {
    const img = screen.getByRole('img', { name: 'iPhone 11 Pro Max' })
    expect(img).toBeInTheDocument()
  })
})
