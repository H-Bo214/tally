import './EditDeleteModal.css'
import Button from '../Button/Button'

const EditDeleteModal = ({
  setEditDeleteModalOpen,
  handleEditProduct,
  handleConfirmedDelete,
  id,
}) => {
  const closeModalToEdit = () => {
    setEditDeleteModalOpen(false)
    handleEditProduct(id)
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
          }}
        />
      </div>
    </section>
  )
}

export default EditDeleteModal
