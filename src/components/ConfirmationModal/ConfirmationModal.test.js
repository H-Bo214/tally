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

  it('should contain a child', () => {
    render(<ConfirmationModal children={<Button name='Test Button' />} />)
    const button = screen.getByRole('button', { name: 'Test Button' })
    expect(button).toBeInTheDocument()
  })

  it('should be able to contain multiple children', () => {
    render(
      <ConfirmationModal
        children={[
          <Button name='Test Button' key='1' />,
          <Button name='Test Button2' key='2' />,
          <Button name='Test Button3' key='3' />,
        ]}
      />
    )
    const button = screen.getByRole('button', { name: 'Test Button' })
    const button2 = screen.getByRole('button', { name: 'Test Button2' })
    const button3 = screen.getByRole('button', { name: 'Test Button3' })
    expect(button).toBeInTheDocument()
    expect(button2).toBeInTheDocument()
    expect(button3).toBeInTheDocument()
  })

  it('should fire an event when a button is clicked', () => {
    const keepEditing = jest.fn()
    render(
      <ConfirmationModal
        children={<Button name='Keep Editing' key='1' onClick={keepEditing} />}
      />
    )
    const button = screen.getByRole('button', { name: 'Keep Editing' })
    fireEvent.click(button)
    expect(keepEditing).toHaveBeenCalledTimes(1)
  })
})
