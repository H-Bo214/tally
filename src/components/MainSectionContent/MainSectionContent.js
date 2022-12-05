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
    const data = await addNewProduct(newProductData)
    setProducts([...products, data])
  }

  const handleUpdateExistingProduct = async (id, newData) => {
    const data = await updateProduct(id, newData)
    setProducts(
      products.map((product) => (product.id === data.id ? data : product))
    )
    setDataToEdit(null)
  }

  const handleEditProduct = async (id) => {
    const productToEdit = await getSingleProduct(id)
    setDataToEdit(productToEdit)
    handleOpenModal()
  }

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id)
    setProducts(products.filter((product) => product.id !== id))
  }

  const handleOpenModal = () => {
    setConfirmModalIsOpen(false)
    setOpenModal(true)
  }

  const handleOpenConfirmationModal = () => {
    setOpenModal(false)
    setConfirmModalIsOpen(true)
  }

  const handleCloseConfirmationModal = () => {
    setDataToEdit(null)
    setConfirmModalIsOpen(false)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setDataToEdit(null)
  }

  const handlePartialEdit = (data) => {
    setDataToEdit(data)
    handleOpenConfirmationModal()
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
          handlePartialEdit={handlePartialEdit}
          dataToEdit={dataToEdit}
        />
      )}
      {confirmModalIsOpen && (
        <ConfirmationModal
          handleCloseConfirmationModal={handleCloseConfirmationModal}
          dataToEdit={dataToEdit}
          handleUpdateExistingProduct={handleUpdateExistingProduct}
          handleOpenModal={handleOpenModal}
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
