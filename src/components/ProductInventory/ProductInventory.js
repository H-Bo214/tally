import './ProductInventory.css'
/// product state will most likely live here
import Product from '../Product/Product'

const ProductInventory = () => {
  return (
    <main>
      <section className='add-new-product-container'>
        <h2 className='inventory-heading'>Inventory</h2>
        <button className='new-product-button'>New product</button>
      </section>
      <section className='products-container'>
        <ul className='product-list-headings'>
          <li>Product</li>
          <li className='description-heading'>Description</li>
          <li className='price-heading'>Price</li>
          <li className='quantity-heading'>Quantity</li>
          <li className='status-heading'>Status</li>
        </ul>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </main>
  )
}

export default ProductInventory
