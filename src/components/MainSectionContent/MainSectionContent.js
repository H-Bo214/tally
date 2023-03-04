import './MainSectionContent.css'
import Header from '../Header/Header'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Product from '../Product/Product'
import Error from '../Error/Error'
import ProductHeadings from '../ProductHeadings/ProductHeadings'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProductFormModal from '../ProductFormModal/ProductFormModal'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal'
import Button from '../Button/Button'
import { useState, useEffect, useRef } from 'react'
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

  const handleCloseConfirmationModal = () => {
    setDataToEdit(null)
    setConfirmModalIsOpen(false)
  }

  const handlePartialEdit = (data) => {
    if (!modalErrorMsg) {
      setDataToEdit(data)
      setOpenModal(false)
      setConfirmModalIsOpen(true)
      return
    }
    setOpenModal(false)
  }

  const handleKeepEditing = () => {
    setConfirmModalIsOpen(false)
    setOpenModal(true)
  }

  const handleDataToEdit = (dataState) => {
    setDataToEdit(dataState)
  }

  const handleProductDeletion = () => {
    setConfirmedDelete(false)
    handleDeleteProduct(productToDelete)
  }

  return (
    <section className='main-section-content-container'>
      <Header />
      <AddNewProduct setOpenModal={setOpenModal} />
      {openModal && (
        <ProductFormModal
          setOpenModal={setOpenModal}
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
          heading='Save your edits?'
          prompt='Your changes to this product will be lost if not saved.'
        >
          <Button
            name='Keep editing'
            className='keep-editing-button'
            onClick={handleKeepEditing}
          />
          <Button
            name='Discard'
            className='discard-button'
            onClick={handleCloseConfirmationModal}
          />
          <Button
            name='Save'
            className='save-button'
            onClick={() => {
              handleUpdateExistingProduct(dataToEdit.id, dataToEdit)
              handleCloseConfirmationModal()
            }}
          />
        </ConfirmationModal>
      )}
      {confirmedDelete && (
        <ConfirmationModal
          heading='Delete this product?'
          prompt='Your product will be permanently deleted.'
        >
          <Button
            name='Cancel'
            className='cancel-button'
            onClick={() => setConfirmedDelete(false)}
          />
          <Button
            name='Delete'
            className='delete-button'
            onClick={handleProductDeletion}
          />
        </ConfirmationModal>
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
