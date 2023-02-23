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

  return (
    <>
      <div className='delete-confirmation-modal-overlay' />
      <section className='delete-confirmation-modal'>
        <h3 className='delete-confirmation-heading'>
          Are you sure you would like to delete this product?
        </h3>
        <section>
          <Button name='Cancel' onClick={() => setConfirmedDelete(false)} />
          <Button name='Delete' onClick={handleProductDeletion} />
        </section>
      </section>
    </>
  )
}

export default DeleteConfirmationModal
