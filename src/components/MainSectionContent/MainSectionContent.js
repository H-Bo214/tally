import './MainSectionContent.css'
import Header from '../Header/Header'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Product from '../Product/Product'
import Error from '../Error/Error'
import ProductHeadings from '../ProductHeadings/ProductHeadings'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProductFormModal from '../ProductFormModal/ProductFormModal'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal'
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConfirmationModal'
import { useState, useEffect } from 'react'
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
  const [confirmedDelete, setConfirmedDelete] = useState(false)
  const [productToDelete, setProductToDelete] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts()
        if (data.length > 0) {
          setProducts(data)
          setIsLoading(false)
        } else {
          setError('No Products to display')
          setIsLoading(false)
        }
      } catch (error) {
        console.error(error.message)
        setIsLoading(false)
        setError(
          'An error occurred getting your products, please refresh the page.'
        )
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
    setOpenModal(true)
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

  const handleConfirmedDelete = (id) => {
    setConfirmedDelete(true)
    setProductToDelete(id)
  }

  const handleOpenModal = () => {
    setOpenModal(true)
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
    setOpenModal(false)
    setConfirmModalIsOpen(true)
  }

  const handleKeepEditing = () => {
    setConfirmModalIsOpen(false)
    setOpenModal(true)
  }

  const handleDataToEdit = (dataState) => {
    setDataToEdit(dataState)
  }

  return (
    <section className='main-section-content-container'>
      <Header />
      <AddNewProduct handleOpenModal={handleOpenModal} />
      {openModal && (
        <ProductFormModal
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
      {confirmedDelete && (
        <DeleteConfirmationModal
          setConfirmedDelete={setConfirmedDelete}
          productToDelete={productToDelete}
          handleDeleteProduct={handleDeleteProduct}
          confirmedDelete={confirmedDelete}
        />
      )}
      <main>
        <section className='products-container'>
          <ProductHeadings />
          <LoadingSpinner isLoading={isLoading} />
          {error && <Error error={error} />}
          {products.length > 0 &&
            products.map((product) => (
              <Product
                product={product}
                key={product.id}
                handleEditProduct={handleEditProduct}
                handleConfirmedDelete={handleConfirmedDelete}
                setConfirmedDelete={setConfirmedDelete}
              />
            ))}
        </section>
      </main>
    </section>
  )
}

export default MainSectionContent
