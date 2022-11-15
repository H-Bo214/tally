import './MainSectionContent.css'
import Header from '../Header/Header'
import ProductInventory from '../ProductInventory/ProductInventory'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import NewProductModal from '../NewProductModal/NewProductModal'
import { useState, useEffect } from 'react'

const MainSectionContent = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [openModal, setOpenModal] = useState(false)

  // Modal functionality
  // when I click on the + new Product button I need to render the
  // NewProductModal Component over the 'container'  <section /> section element

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/products')
        const data = await res.json()
        setProducts(data)
        setIsLoading(false)
      } catch (error) {
        console.error(error.message)
        setIsLoading(false)
        setError('An error occurred, please refresh the page.')
      }
    }
    fetchProducts()
  }, [])

  const handleAddNewProduct = async (newProductData) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newProductData),
    }

    const res = await fetch('http://localhost:5000/products', options)
    const data = await res.json()
    setProducts([...products, data])
  }

  const handleEditProduct = async (id) => {
    console.log('id clicked', id)
    // I need to filter through the products array
    // locate the product clicked via ID
    // need to open up the modal and prepopulate the text currently in the object
  }

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <section className='main-section-content-container'>
      <Header />
      <AddNewProduct handleOpenModal={handleOpenModal} />
      {openModal && (
        <NewProductModal
          handleCloseModal={handleCloseModal}
          handleAddNewProduct={handleAddNewProduct}
        />
      )}
      <ProductInventory
        products={products}
        error={error}
        isLoading={isLoading}
        handleEditProduct={handleEditProduct}
      />
    </section>
  )
}

export default MainSectionContent
