import './ProductInventory.css'
/// product state will most likely live here
import Product from '../Product/Product'

const ProductInventory = () => {
  return (
    <main>
      <section className='add-new-product-container'>
        <h2>Inventory</h2>
        <button>+ New product</button>
      </section>
      <section>
        <ul className='product-list-headings'>
          <li>Product</li>
          <li>Description</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Status</li>
        </ul>
      </section>
      <Product />
    </main>
  )
}

export default ProductInventory
