import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import EditDeleteModal from './EditDeleteModal'

describe('EditDeleteModal', () => {
  beforeEach(() => jest.clearAllMocks())
  it('should render a modal', () => {
    const { container } = render(<EditDeleteModal />)
    const editModal = container.getElementsByClassName(
      'edit-delete-modal-container'
    )
    expect(editModal.length).toBe(1)
  })

  it('should render an edit button', () => {
    render(<EditDeleteModal />)
    const editButton = screen.getByRole('button', { name: 'Edit' })
    expect(editButton).toBeInTheDocument()
  })

  it('should render a delete button', () => {
    render(<EditDeleteModal />)
    const deleteButton = screen.getByRole('button', { name: 'Delete' })
    expect(deleteButton).toBeInTheDocument()
  })

  it('should trigger an event when the Edit button is clicked', () => {
    const handleEditProduct = jest.fn()
    const setEditDeleteModalOpen = jest.fn()
    const setTabIndex = jest.fn()
    render(
      <EditDeleteModal
        setEditDeleteModalOpen={setEditDeleteModalOpen}
        handleEditProduct={handleEditProduct}
        setTabIndex={setTabIndex}
      />
    )
    const editButton = screen.getByText('Edit')
    fireEvent.click(editButton)
    expect(setEditDeleteModalOpen).toHaveBeenCalledTimes(1)
    expect(handleEditProduct).toHaveBeenCalledTimes(1)
  })

  it('should trigger an event when the Delete button is clicked', () => {
    const handleConfirmedDelete = jest.fn()
    const setEditDeleteModalOpen = jest.fn()
    const setTabIndex = jest.fn()
    render(
      <EditDeleteModal
        handleConfirmedDelete={handleConfirmedDelete}
        setEditDeleteModalOpen={setEditDeleteModalOpen}
        setTabIndex={setTabIndex}
      />
    )
    const deleteButton = screen.getByText('Delete')
    fireEvent.click(deleteButton)
    expect(handleConfirmedDelete).toHaveBeenCalledTimes(1)
    expect(setEditDeleteModalOpen).toHaveBeenCalledTimes(1)
  })
})
