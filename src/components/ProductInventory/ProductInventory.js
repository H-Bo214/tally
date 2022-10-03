import './ProductInventory.css'
import Product from '../Product/Product'
import { useState, useEffect } from 'react'
/// product state will most likely live here
// Need to install json server
// need to create a state to store the data received from json server
// need to create a useEffect to fetch this data, set this data on page load and to watch the state for any changes in products (later this will be removing/adding)

const ProductInventory = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('http://localhost:5000/products')
      const data = await res.json()
      console.log('data', data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  console.log('products', products)
  const productList = products.map((product) => (
    <Product product={product} key={product.id} />
  ))

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
        {productList}
      </section>
    </main>
  )
}

export default ProductInventory
