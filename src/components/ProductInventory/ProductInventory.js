import './ProductInventory.css'
import Product from '../Product/Product'
import ProductHeadings from '../ProductHeadings/ProductHeadings'
import MoonLoader from 'react-spinners/MoonLoader'
import { CSSProperties } from 'react'

const override: CSSProperties = {
  display: 'block',
  margin: '5rem auto',
}

const ProductInventory = ({ products, error, isLoading }) => {
  const productList = products.map((product) => (
    <Product product={product} key={product.id} />
  ))

  return (
    <main>
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
