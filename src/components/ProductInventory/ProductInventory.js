import './ProductInventory.css'
import Product from '../Product/Product'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProductHeadings from '../ProductHeadings/ProductHeadings'
import MoonLoader from 'react-spinners/MoonLoader'
import { useState, useEffect, CSSProperties } from 'react'

const override: CSSProperties = {
  display: 'block',
  margin: '5rem auto',
}

const ProductInventory = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/products')
        const data = await res.json()
        setProducts(data)
        setIsLoading(false)
      } catch (error) {
        console.error(error.message)
        setError('An error occurred, please refresh the page.')
      }
    }
    fetchProducts()
  }, [])

  const productList = products.map((product) => (
    <Product product={product} key={product.id} />
  ))

  return (
    <main>
      <AddNewProduct />
      <section className='products-container'>
        <ProductHeadings />
        <MoonLoader
          loading={isLoading}
          aria-label='Loading Spinner'
          size={150}
          color='#76ADFF'
          cssOverride={override}
          speedMultiplier={0.5}
        />
        {products && productList}
        {error && <h1 className='error-message'>{error}</h1>}
      </section>
    </main>
  )
}

export default ProductInventory
