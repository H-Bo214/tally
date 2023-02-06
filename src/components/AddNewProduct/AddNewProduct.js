import './AddNewProduct.css'
import Button from '../Button/Button'

const AddNewProduct = ({ handleOpenModal }) => {
  return (
    <section className='add-new-product-container'>
      <h2 className='inventory-heading'>Inventory</h2>
      <Button
        name='New product'
        className='new-product-button'
        onClick={handleOpenModal}
      />
    </section>
  )
}

export default AddNewProduct
