import './Product.css'
import { useState } from 'react'
import EditDeleteModal from '../EditDeleteModal/EditDeleteModal'

const Product = ({
  product,
  handleEditProduct,
  handleConfirmedDelete,
  tabIndex,
  setTabIndex,
}) => {
  const [editDeleteModalOpen, setEditDeleteModalOpen] = useState(false)
  const { imgUrl, name, sku, description, price, quantity, id } = product
  return (
    <section
      className='single-product-container'
      tabIndex={tabIndex}
      onMouseLeave={() => setEditDeleteModalOpen(false)}
    >
      <img src={imgUrl} alt={name} width='54' height='50' className='thumbnail'/>  
      <div className='product-container'>
        <h3>{name}</h3>
        <p>{sku}</p>
      </div>
      <div className='product-description-container'>
        <p>{description}</p>
      </div>
      <div className='single-product-status-container'>
        <p className='price'>${price}</p>
        <p className='quantity'>{quantity}</p>
        <p
          className='stock-status'
          style={{ backgroundColor: product.status.labelColor }}
        >
          {product.status.value}
        </p>
        <div className='edit-button-container'>
          <button
            className='edit-button'
            onClick={() => setEditDeleteModalOpen(true)}
            aria-label='edit or delete menu'
          />
        </div>
      </div>
      {editDeleteModalOpen && (
        <EditDeleteModal
          setEditDeleteModalOpen={setEditDeleteModalOpen}
          handleEditProduct={handleEditProduct}
          handleConfirmedDelete={handleConfirmedDelete}
          id={id}
          setTabIndex={setTabIndex}
        />
      )}
    </section>
  )
}

export default Product
