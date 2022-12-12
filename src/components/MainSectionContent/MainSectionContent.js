import './MainSectionContent.css'
import Header from '../Header/Header'
import ProductInventory from '../ProductInventory/ProductInventory'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import NewProductModal from '../NewProductModal/NewProductModal'
import { useState, useEffect } from 'react'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal'
import {
  deleteProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  addNewProduct,
} from '../../apiCalls'

const MainSectionContent = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')
  const [modalErrorMsg, setModalErrorMsg] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [openModal, setOpenModal] = useState(false)
  const [dataToEdit, setDataToEdit] = useState(null)
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts()
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
    try {
      const data = await addNewProduct(newProductData)
      setProducts([...products, data])
    } catch (error) {
      console.error(error.message)
      setError('An error occurred adding a new product, try again.')
    }
  }

  const handleUpdateExistingProduct = async (id, newData) => {
    try {
      const data = await updateProduct(id, newData)
      setProducts(
        products.map((product) => (product.id === data.id ? data : product))
      )
    } catch (error) {
      console.error(error.message)
      setError('An error occurred updating the product, try again.')
    }
  }

  const handleEditProduct = async (id) => {
    try {
      const productToEdit = await getSingleProduct(id)
      setDataToEdit(productToEdit)
    } catch (error) {
      console.error(error.message)
      setModalErrorMsg('An error occurred fetching your product, try again.')
    }
    handleOpenModal()
  }

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id)
      setProducts(products.filter((product) => product.id !== id))
    } catch (error) {
      console.error(error.message)
      setError('An error occurred attempting to delete a product, try again.')
    }
  }

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleOpenConfirmationModal = () => {
    handleCloseModal()
    setConfirmModalIsOpen(true)
  }

  const handleCloseConfirmationModal = () => {
    setDataToEdit(null)
    setConfirmModalIsOpen(false)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handlePartialEdit = (data) => {
    setDataToEdit(data)
    handleOpenConfirmationModal()
  }

  const handleKeepEditing = () => {
    setConfirmModalIsOpen(false)
    handleOpenModal()
  }

  const handleDataToEdit = (dataState) => {
    setDataToEdit(dataState)
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
          handlePartialEdit={handlePartialEdit}
          handleDataToEdit={handleDataToEdit}
          dataToEdit={dataToEdit}
          modalErrorMsg={modalErrorMsg}
        />
      )}
      {confirmModalIsOpen && (
        <ConfirmationModal
          handleCloseConfirmationModal={handleCloseConfirmationModal}
          dataToEdit={dataToEdit}
          handleUpdateExistingProduct={handleUpdateExistingProduct}
          handleKeepEditing={handleKeepEditing}
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
