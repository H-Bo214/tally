import './DeleteConfirmationModal.css'
import Button from '../Button/Button'
const DeleteConfirmationModal = ({
  handleDeleteProduct,
  productToDelete,
  setConfirmedDelete,
}) => {
  const handleProductDeletion = () => {
    setConfirmedDelete(false)
    handleDeleteProduct(productToDelete)
  }

  //refactor to combine DeleteConfirmationModal and ConfirmationModal into a single reuseable component

  return (
    <>
      <div className='delete-confirmation-modal-overlay' />
      <section className='delete-confirmation-modal'>
        <h3 className='delete-confirmation-heading'>Delete this product?</h3>
        <p>Your product will be permanently deleted. </p>
        <section className='delete-buttons-container'>
          <Button
            name='Cancel'
            className='cancel-button'
            onClick={() => setConfirmedDelete(false)}
          />
          <Button
            name='Delete'
            className='delete-button'
            onClick={handleProductDeletion}
          />
        </section>
      </section>
    </>
  )
}

export default DeleteConfirmationModal
