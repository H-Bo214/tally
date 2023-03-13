import products from '../../testData'
import MainSectionContent from './MainSectionContent'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { getProducts } from '../../apiCalls'
jest.mock('../../apiCalls')

describe('MainSectionContent', () => {
  it('should render a message if no products are available to display', async () => {
    render(<MainSectionContent />)
    getProducts.mockResolvedValueOnce(products)
    await waitFor(() => expect(getProducts).toHaveBeenCalledTimes(1))
  })
})
