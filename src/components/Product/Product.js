import './Product.css'
import { useState } from 'react'
import EditDeleteModal from '../EditDeleteModal/EditDeleteModal'

const Product = ({ product, handleEditProduct, handleConfirmedDelete }) => {
  const [isHovering, setIsHovering] = useState(false)
  const [editDeleteModalOpen, setEditDeleteModalOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setEditDeleteModalOpen(false)
  }

  const handleOpenEditModal = () => {
    setEditDeleteModalOpen(true)
  }

  return (
    <section
      className='single-product-container'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
        <p className='stock-status'>{product.status.value}</p>
        <button
          className={isHovering ? 'edit-button' : 'no-display'}
          onClick={handleOpenEditModal}
          aria-label='edit or delete menu'
        />
      </div>
      {editDeleteModalOpen && (
        <EditDeleteModal
          setEditDeleteModalOpen={setEditDeleteModalOpen}
          handleEditProduct={handleEditProduct}
          handleConfirmedDelete={handleConfirmedDelete}
          id={product.id}
        />
      )}
    </section>
  )
}

export default Product
