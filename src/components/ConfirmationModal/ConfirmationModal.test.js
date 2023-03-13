import ConfirmationModal from './ConfirmationModal'
import Button from '../Button/Button'
import { render, screen, fireEvent } from '@testing-library/react'

describe('ConfirmationModal', () => {
  it('should contain a heading', () => {
    render(<ConfirmationModal heading='Save your edits?' />)
    const h3 = screen.getByRole('heading', { name: /Save your edits?/i })
    expect(h3).toBeInTheDocument()
  })

  it('should contain a prompt', () => {
    render(
      <ConfirmationModal prompt='Your changes to this product will be lost if not saved' />
    )
    const text = screen.getByText(
      'Your changes to this product will be lost if not saved'
    )
    expect(text).toBeInTheDocument()
  })
})
