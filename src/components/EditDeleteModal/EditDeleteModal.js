import './EditDeleteModal.css'
import Button from '../Button/Button'

const EditDeleteModal = ({
  setEditDeleteModalOpen,
  handleEditProduct,
  handleConfirmedDelete,
  id,
  handleRemoveFocus,
}) => {
  const closeModalToEdit = () => {
    setEditDeleteModalOpen(false)
    handleEditProduct(id)
    handleRemoveFocus()
  }

  return (
    <section
      className='edit-delete-modal-container'
      onMouseLeave={() => setEditDeleteModalOpen(false)}
    >
      <div>
        <Button name='Edit' className='edit' onClick={closeModalToEdit} />
      </div>
      <div>
        <Button
          name='Delete'
          className='delete'
          onClick={() => {
            handleConfirmedDelete(id)
            setEditDeleteModalOpen(false)
            handleRemoveFocus()
          }}
        />
      </div>
    </section>
  )
}

export default EditDeleteModal
