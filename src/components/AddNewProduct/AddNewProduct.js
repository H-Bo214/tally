import './AddNewProduct.css'

// Modal initialization here onClick of New Product button will open Modal form.

const AddNewProduct = () => {
  return (
    <section className='add-new-product-container'>
      <h2 className='inventory-heading'>Inventory</h2>
      <button className='new-product-button'>New product</button>
    </section>
  )
}

export default AddNewProduct
