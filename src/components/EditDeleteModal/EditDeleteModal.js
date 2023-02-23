import './EditDeleteModal.css'
import Button from '../Button/Button'

const EditDeleteModal = ({
  handleCloseEditModal,
  handleEditProduct,
  handleConfirmedDelete,
  id,
}) => {
  const handleModalClose = () => {
    handleCloseEditModal()
    handleEditProduct(id)
  }

  return (
    <section
      className='edit-delete-modal-container'
      onMouseLeave={handleCloseEditModal}
    >
      <div>
        <Button name='Edit' className='edit' onClick={handleModalClose} />
      </div>
      <div>
        <Button
          name='Delete'
          className='delete'
          onClick={() => handleConfirmedDelete(id)}
        />
      </div>
    </section>
  )
}

export default EditDeleteModal
