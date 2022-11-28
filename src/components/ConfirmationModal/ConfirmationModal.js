import './ConfirmationModal.css'

const ConfirmationModal = () => {
  return (
    <>
      <div className='confirmation-modal-overlay' />
      <section className='confirmation-modal'>
        <h3 className='confirmation-heading'>Save your edits?</h3>
        <p>Your changes to this product will be lost if you don't save them.</p>
        <section className='buttons-container'>
          <button className='keep-editing'>Keep editing</button>
          <button className='discard'>Discard</button>
          <button className='save'>Save</button>
        </section>
      </section>
    </>
  )
}

export default ConfirmationModal
