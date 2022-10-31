import './Product.css'

const Product = ({ product }) => {
  return (
    <section className='single-product-container'>
      <img src={product.img} alt={product.name} width='54' height='50' />
      <div className='product-container'>
        <h3>{product.name}</h3>
        <p>{product.sku}</p>
      </div>
      <div className='product-description-container'>
        <p>{product.description}</p>
      </div>
      <div className='single-product-status-container'>
        <p>${product.price}</p>
        <p>{product.quantity}</p>
        <p className='stock-status'>{product.status}</p>
        <button className='edit-button' name='edit button' />
      </div>
    </section>
  )
}

export default Product
