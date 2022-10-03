import iphone from '../../assets/productImages/iphone13.png'
import './Product.css'
const Product = () => {
  return (
    <section className='single-product-container'>
      <img src={iphone} alt='' width='53' height='53' />
      <div className='product-container'>
        <h5>iPhone 13 Pro Rose Gold</h5>
        <p>894873672</p>
      </div>
      <div className='product-description-container'>
        <p>
          A super bright display in a durable design. Hollywood-worthy video
          shooting made easy. A lightning-fast chip. And a big boost in battery
          life you’ll notice every day.
        </p>
      </div>
      <div className='single-product-status-container'>
        <p>$200.00</p>
        <p>120</p>
        <p className='stock-status'>In stock</p>
      </div>
    </section>
  )
}

export default Product
