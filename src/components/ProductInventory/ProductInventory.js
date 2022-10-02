import './ProductInventory.css'
import plusIcon from '../../assets/icons/plus.svg'
/// product state will most likely live here
import Product from '../Product/Product'

const ProductInventory = () => {
  return (
    <main>
      <section className='add-new-product-container'>
        <h2 className='inventory-heading'>Inventory</h2>
        <button className='new-product-button'>New product</button>
      </section>
      <section className='product-list-headings-container'>
        <ul className='product-list-headings'>
          <li>Product</li>
          <li>Description</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Status</li>
        </ul>
      </section>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </main>
  )
}

export default ProductInventory
