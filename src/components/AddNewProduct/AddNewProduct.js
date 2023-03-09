import './AddNewProduct.css'
import Button from '../Button/Button'

const AddNewProduct = ({ setFormModalIsOpen }) => {
  return (
    <section className='add-new-product-container'>
      <h2 className='inventory-heading'>Inventory</h2>
      <Button
        name='New product'
        className='new-product-button'
        onClick={() => setFormModalIsOpen(true)}
      />
    </section>
  )
}

export default AddNewProduct
