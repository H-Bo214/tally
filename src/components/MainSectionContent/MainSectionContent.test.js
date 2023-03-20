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
    const product = await waitFor(() => screen.findByText('iPhone 13 Pro'))
    await act(() => product)
    expect(product).toBeInTheDocument()
    cleanup()
  })

  it('should display multiple products on page load', async () => {
    const productsFetch = getProducts.mockResolvedValueOnce(products)
    render(<MainSectionContent />)
    await act(() => productsFetch)
    const product1 = await screen.findByText('iPhone 13 Pro')
    const product2 = await screen.findByText('Air Pods Pro 2')
    const product3 = await screen.findByText(
      'Sony Playstation 5 DualSense Wireless Controller'
    )
    expect(product1).toBeInTheDocument()
    expect(product2).toBeInTheDocument()
    expect(product3).toBeInTheDocument()
    cleanup()
    screen.debug()
  })
})
