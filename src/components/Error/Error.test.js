import { screen, render } from '@testing-library/react'
import Error from './Error'

describe('Error', () => {
  it('should render a heading when an error occurs', () => {
    render(<Error error='An error occurred, please try again' />)
    const errorMessage = screen.getByRole('heading', {
      name: 'An error occurred, please try again',
    })
    expect(errorMessage).toBeInTheDocument()
  })
})
