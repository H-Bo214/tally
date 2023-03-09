import './ConfirmationModal.css'

const ConfirmationModal = ({ heading, prompt, children }) => {
  return (
    <>
      <div className='confirmation-modal-overlay' />
      <section className='confirmation-modal'>
        <h3 className='confirmation-heading'>{heading}</h3>
        <p>{prompt}</p>
        <section className='confirmation-buttons-container'>{children}</section>
      </section>
    </>
  )
}

export default ConfirmationModal
