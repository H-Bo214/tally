import { products } from '../../testData'
import MainSectionContent from './MainSectionContent'
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from '@testing-library/react'
import { getProducts } from '../../apiCalls'
jest.mock('../../apiCalls')

describe('MainSectionContent', () => {
  it('should fetch products on page load', async () => {
    const productsFetch = getProducts.mockResolvedValueOnce(products)
    render(<MainSectionContent />)
    await act(() => productsFetch)
    await waitFor(() => expect(getProducts).toHaveBeenCalledTimes(1))
    expect(products).toHaveLength(3)
    cleanup()
  })

  it('should display a product on page load', async () => {
    const productsFetch = getProducts.mockResolvedValueOnce(products)
    render(<MainSectionContent />)
    await act(() => productsFetch)
    const product = await waitFor(() => screen.findByText(/iPhone 13 Pro/i))
    await act(() => product)
    expect(product).toBeInTheDocument()
    cleanup()
  })

  it('should display multiple products on page load', async () => {
    const productsFetch = getProducts.mockResolvedValueOnce(products)
    render(<MainSectionContent />)
    await act(() => productsFetch)
    const product1 = await screen.findByText(/iPhone 13 Pro/i)
    const product2 = await screen.findByText(/Air Pods Pro 2/i)
    const product3 = await screen.findByText(
      /Sony Playstation 5 DualSense Wireless Controller/i
    )
    expect(product1).toBeInTheDocument()
    expect(product2).toBeInTheDocument()
    expect(product3).toBeInTheDocument()
    cleanup()
  })

  it('should display a product form when adding a new product', () => {
    render(<MainSectionContent />)
    const newProductButton = screen.getByRole('button', {
      name: /new product/i,
    })
    expect(newProductButton).toBeInTheDocument()
    fireEvent.click(newProductButton)
    const heading = screen.getByRole('heading', { name: /New Product/i })
    const productName = screen.getByLabelText(/name/i)
    const sku = screen.getByLabelText(/sku/i)
    const description = screen.getByLabelText(/description/i)
    const price = screen.getByLabelText(/price/i)
    const quantity = screen.getByLabelText(/quantity/i)
    const status = screen.getByText(/choose an option/i)
    const imageUrl = screen.getByLabelText(/image URL/i)
    const imagePreview = screen.getByAltText(/placeholder/i)
    expect(heading).toBeInTheDocument()
    expect(productName).toBeInTheDocument()
    expect(sku).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(price).toBeInTheDocument()
    expect(quantity).toBeInTheDocument()
    expect(imageUrl).toBeInTheDocument()
    expect(imagePreview).toBeInTheDocument()
    expect(status).toBeInTheDocument()
    cleanup()
  })
})
