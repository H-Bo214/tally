import './EditDeleteModal.css'

const EditDeleteModal = ({ handleCloseEditModal, handleEditProduct, id }) => {
  return (
    <section
      className='edit-delete-modal-container'
      onMouseLeave={handleCloseEditModal}
    >
      <div>
        <button className='edit' onClick={() => handleEditProduct(id)}>
          Edit
        </button>
      </div>
      <div>
        <button className='delete'>Delete</button>
      </div>
    </section>
  )
}

export default EditDeleteModal
