import './ConfirmationModal.css'
import Button from '../Button/Button'

const ConfirmationModal = ({
  handleCloseConfirmationModal,
  handleUpdateExistingProduct,
  handleKeepEditing,
  dataToEdit,
}) => {
  return (
    <>
      <div className='confirmation-modal-overlay' />
      <section className='confirmation-modal'>
        <h3 className='confirmation-heading'>Save your edits?</h3>
        <p>Your changes to this product will be lost if you don't save them.</p>
        <section className='buttons-container'>
          <Button
            name='Keep editing'
            className='keep-editing-button'
            onClick={handleKeepEditing}
          />
          <Button
            name='Discard'
            className='discard-button'
            onClick={handleCloseConfirmationModal}
          />
          <Button
            name='Save'
            className='save-button'
            onClick={() => {
              handleUpdateExistingProduct(dataToEdit.id, dataToEdit)
              handleCloseConfirmationModal()
            }}
          />
        </section>
      </section>
    </>
  )
}

export default ConfirmationModal
