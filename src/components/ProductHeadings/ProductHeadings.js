import './ProductHeadings.css'

const ProductHeadings = () => {
  return (
    <section className='product-list-headings'>
      <p className='product-heading'>Product</p>
      <p className='description-heading'>Description</p>
      <div className='price-quantity-status-container'>
        <p className='price-heading'>Price</p>
        <p className='quantity-heading'>Quantity</p>
        <p className='status-heading'>Status</p>
      </div>
    </section>
  )
}

export default ProductHeadings
