import './AddNewProduct.css'

const AddNewProduct = ({ handleOpenModal }) => {
  return (
    <section className='add-new-product-container'>
      <h2 className='inventory-heading'>Inventory</h2>
      <button className='new-product-button' onClick={handleOpenModal}>
        New product
      </button>
    </section>
  )
}

export default AddNewProduct
