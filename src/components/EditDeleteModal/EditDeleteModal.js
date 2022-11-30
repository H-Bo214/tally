import './EditDeleteModal.css'

const EditDeleteModal = ({
  handleCloseEditModal,
  handleEditProduct,
  handleDeleteProduct,
  id,
}) => {
  return (
    <section
      className='edit-delete-modal-container'
      onMouseLeave={handleCloseEditModal}
    >
      <div>
        <button
          className='edit'
          onClick={() => {
            handleCloseEditModal()
            handleEditProduct(id)
          }}
        >
          Edit
        </button>
      </div>
      <div>
        <button className='delete' onClick={() => handleDeleteProduct(id)}>
          Delete
        </button>
      </div>
    </section>
  )
}

export default EditDeleteModal
