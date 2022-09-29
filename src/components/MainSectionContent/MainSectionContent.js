import './MainSectionContent.css'
import Header from '../Header/Header'
import ProductInventory from '../ProductInventory/ProductInventory'
const MainSectionContent = () => {
  return (
    <section className='main-section-content-container'>
      <Header />
      <ProductInventory />
    </section>
  )
}

export default MainSectionContent
