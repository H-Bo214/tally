import './Product.css'
import { useState } from 'react'
import EditDeleteModal from '../EditDeleteModal/EditDeleteModal'

const Product = ({ product, handleEditProduct, handleConfirmedDelete }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [editDeleteModalOpen, setEditDeleteModalOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsFocused(true)
  }

  const handleRemoveFocus = () => {
    setIsFocused(false)
    setEditDeleteModalOpen(false)
  }

  const handleOpenEditModal = () => {
    setEditDeleteModalOpen(true)
  }

  return (
    <section
      className='single-product-container'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleRemoveFocus}
    >
      <img src={product.imgUrl} alt={product.name} width='54' height='50' />
      <div className='product-container'>
        <h3>{product.name}</h3>
        <p>{product.sku}</p>
      </div>
      <div className='product-description-container'>
        <p>{product.description}</p>
      </div>
      <div className='single-product-status-container'>
        <p className='price'>${product.price}</p>
        <p className='quantity'>{product.quantity}</p>
        <p
          className='stock-status'
          style={{ backgroundColor: product.status.labelColor }}
        >
          {product.status.value}
        </p>
        <div className='edit-button-container'>
          <button
            className={isFocused ? 'edit-button' : 'no-display'}
            onClick={handleOpenEditModal}
            aria-label='edit or delete menu'
          />
        </div>
      </div>
      {editDeleteModalOpen && (
        <EditDeleteModal
          setEditDeleteModalOpen={setEditDeleteModalOpen}
          handleEditProduct={handleEditProduct}
          handleConfirmedDelete={handleConfirmedDelete}
          id={product.id}
          handleRemoveFocus={handleRemoveFocus}
        />
      )}
    </section>
  )
}

export default Product
