import './Product.css'
import { useState } from 'react'
import EditDeleteModal from '../EditDeleteModal/EditDeleteModal'
const Product = ({ product, handleEditProduct, handleDeleteProduct }) => {
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
    console.log('id', product.id)
    setEditDeleteModalOpen(true)
  }

  const handleCloseEditModal = () => {
    setEditDeleteModalOpen(false)
  }

  return (
    <section
      className='single-product-container'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={product.img} alt={product.name} width='54' height='50' />
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
        <p className='stock-status'>{product.status}</p>
        <button
          className={isHovering ? 'edit-button' : 'no-display'}
          name='edit button'
          onClick={
            editDeleteModalOpen ? handleCloseEditModal : handleOpenEditModal
          }
        />
      </div>
      {editDeleteModalOpen && (
        <EditDeleteModal
          handleCloseEditModal={handleCloseEditModal}
          handleEditProduct={handleEditProduct}
          handleDeleteProduct={handleDeleteProduct}
          id={product.id}
        />
      )}
    </section>
  )
}

export default Product
