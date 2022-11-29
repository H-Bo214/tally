import './MainSectionContent.css'
import Header from '../Header/Header'
import ProductInventory from '../ProductInventory/ProductInventory'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import NewProductModal from '../NewProductModal/NewProductModal'
import { useState, useEffect } from 'react'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal'

const MainSectionContent = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [openModal, setOpenModal] = useState(false)
  const [dataToEdit, setDataToEdit] = useState(null)
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false)

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

  const fetchSingleProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`)
    const data = await res.json()
    return data
  }

  const handleAddNewProduct = async (newProductData) => {
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newProductData),
    }

    const res = await fetch('http://localhost:5000/products', postOptions)
    const data = await res.json()
    setProducts([...products, data])
  }

  const handleUpdateExistingProduct = async (id, newData) => {
    const putOptions = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newData),
    }
    const res = await fetch(`http://localhost:5000/products/${id}`, putOptions)
    const data = await res.json()
    setProducts(
      products.map((product) => (product.id === data.id ? data : product))
    )
    setDataToEdit(null)
  }

  const handleEditProduct = async (id) => {
    const productToEdit = await fetchSingleProduct(id)
    setDataToEdit(productToEdit)
    handleOpenModal()
  }

  const handleDeleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, { method: 'DELETE' })
    setProducts(products.filter((product) => product.id !== id))
  }

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleOpenConfirmationModal = () => {
    setOpenModal(false)
    setConfirmModalIsOpen(true)
    // console.log('dataToEdit', dataToEdit)
  }

  const handleCloseConfirmationModal = () => {
    setDataToEdit(null)
    setConfirmModalIsOpen(false)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    // possible if conditional to hold state of dataToEdit in the event the user decides to keep editing instead of canceling the edits
    setDataToEdit(null)
  }

  return (
    <section className='main-section-content-container'>
      <Header />
      <AddNewProduct handleOpenModal={handleOpenModal} />
      {openModal && (
        <NewProductModal
          handleCloseModal={handleCloseModal}
          handleAddNewProduct={handleAddNewProduct}
          handleUpdateExistingProduct={handleUpdateExistingProduct}
          handleOpenConfirmationModal={handleOpenConfirmationModal}
          dataToEdit={dataToEdit}
        />
      )}
      {confirmModalIsOpen && (
        <ConfirmationModal
          handleCloseConfirmationModal={handleCloseConfirmationModal}
        />
      )}
      <ProductInventory
        products={products}
        error={error}
        isLoading={isLoading}
        handleEditProduct={handleEditProduct}
        handleDeleteProduct={handleDeleteProduct}
      />
    </section>
  )
}

export default MainSectionContent

// next steps work on confirmation modal when editing possibly also when adding new product.
