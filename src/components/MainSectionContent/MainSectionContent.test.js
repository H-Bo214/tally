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
    const nameInput = screen.getByRole('textbox', { name: /name/i })
    const skuInput = screen.getByRole('textbox', { name: /sku/i })
    const imageInput = screen.getByRole('textbox', { name: /image url/i })
    const priceInput = screen.getByRole('spinbutton', { name: /price/i })
    const quantityInput = screen.getByRole('spinbutton', { name: /quantity/i })
    const descriptionInput = screen.getByRole('textbox', {
      name: /description/i,
    })

    const statusDropDown = screen.getByRole('combobox')

    expect(heading).toBeInTheDocument()
    expect(productName).toBeInTheDocument()
    expect(sku).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(price).toBeInTheDocument()
    expect(quantity).toBeInTheDocument()
    expect(imageUrl).toBeInTheDocument()
    expect(imagePreview).toBeInTheDocument()
    expect(status).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()
    expect(skuInput).toBeInTheDocument()
    expect(imageInput).toBeInTheDocument()
    expect(priceInput).toBeInTheDocument()
    expect(quantityInput).toBeInTheDocument()
    expect(descriptionInput).toBeInTheDocument()
    expect(statusDropDown).toBeInTheDocument()
    cleanup()
  })

  it('should not contain form input values when adding a new product', () => {
    render(<MainSectionContent />)
    const newProductButton = screen.getByRole('button', {
      name: /new product/i,
    })
    expect(newProductButton).toBeInTheDocument()
    fireEvent.click(newProductButton)
    const nameField = screen.getByRole('textbox', { name: /name/i })
    const skuInput = screen.getByRole('textbox', { name: /sku/i })
    const imageInput = screen.getByRole('textbox', { name: /image url/i })
    const priceInput = screen.getByRole('spinbutton', { name: /price/i })
    const quantityInput = screen.getByRole('spinbutton', { name: /quantity/i })
    const descriptionInput = screen.getByRole('textbox', {
      name: /description/i,
    })
    const statusDropDown = screen.getByRole('combobox')
    expect(statusDropDown.value).toBe('')
    expect(nameField.value).toBe('')
    expect(skuInput.value).toBe('')
    expect(imageInput.value).toBe('')
    expect(priceInput.value).toBe('')
    expect(quantityInput.value).toBe('')
    expect(descriptionInput.value).toBe('')
    cleanup()
  })

  it('should be able to fill out the product form', () => {
    render(<MainSectionContent />)
    const newProductButton = screen.getByRole('button', {
      name: /new product/i,
    })
    expect(newProductButton).toBeInTheDocument()
    fireEvent.click(newProductButton)
    const nameField = screen.getByRole('textbox', { name: /name/i })
    const skuInput = screen.getByRole('textbox', { name: /sku/i })
    const imageInput = screen.getByRole('textbox', { name: /image url/i })
    const priceInput = screen.getByRole('spinbutton', { name: /price/i })
    const quantityInput = screen.getByRole('spinbutton', { name: /quantity/i })
    const descriptionInput = screen.getByRole('textbox', {
      name: /description/i,
    })
    const statusDropDown = screen.getByRole('combobox')

    fireEvent.change(nameField, { target: { value: 'Ipad Pro' } })
    fireEvent.change(skuInput, { target: { value: 'XDS4567UOP098' } })
    fireEvent.change(imageInput, {
      target: { value: 'https://www.someIpadImage.jpg' },
    })
    fireEvent.change(priceInput, { target: { value: '999' } })
    fireEvent.change(quantityInput, { target: { value: '15' } })
    fireEvent.change(descriptionInput, {
      target: { value: 'Ipad Pro 12th generation blah blah blah' },
    })
    fireEvent.change(statusDropDown, { target: { value: 'In stock' } })
    const imagePreviewUpdatedAlt = screen.getByAltText(/Ipad Pro/i)
    expect(imagePreviewUpdatedAlt).toBeInTheDocument()
    expect(nameField.value).toBe('Ipad Pro')
    expect(skuInput.value).toBe('XDS4567UOP098')
    expect(imageInput.value).toBe('https://www.someIpadImage.jpg')
    expect(priceInput.value).toBe('999')
    expect(quantityInput.value).toBe('15')
    expect(descriptionInput.value).toBe(
      'Ipad Pro 12th generation blah blah blah'
    )
    expect(statusDropDown.value).toBe('In stock')
    cleanup()
  })
})
