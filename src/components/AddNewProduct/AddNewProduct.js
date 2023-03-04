import './AddNewProduct.css'
import Button from '../Button/Button'

const AddNewProduct = ({ setOpenModal }) => {
  return (
    <section className='add-new-product-container'>
      <h2 className='inventory-heading'>Inventory</h2>
      <Button
        name='New product'
        className='new-product-button'
        onClick={() => setOpenModal(true)}
      />
    </section>
  )
}

export default AddNewProduct
