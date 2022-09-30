import iphone from '../../assets/productImages/iphone13.png'
import './Product.css'
const Product = () => {
  return (
    <section className='single-product'>
      <img src={iphone} alt='' width='53' height='53' />
      <div>
        <h5>iphone 13 Pro Rose Gold</h5>
        <p>894873672</p>
      </div>
      <div>
        <p>
          A super bright display in a durable design. Hollywood-worthy video
          shooting made easy. A lightning-fast chip. And a big boost in battery
          life you’ll notice every day.
        </p>
      </div>
      <div className='single-product-status'>
        <p>$200</p>
        <p>120</p>
        <p>in stock</p>
      </div>
    </section>
  )
}

export default Product
