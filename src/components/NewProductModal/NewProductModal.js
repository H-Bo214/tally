import { useForm } from 'react-hook-form'
import './NewProductModal.css'

const NewProductModal = ({
  handleCloseModal,
  handleAddNewProduct,
  handleUpdateExistingProduct,
  handlePartialEdit,
  handleDataToEdit,
  dataToEdit,
  modalErrorMsg,
}) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: dataToEdit
      ? dataToEdit
      : {
          img: '',
          name: '',
          sku: '',
          description: '',
          price: '',
          quantity: '',
          status: '',
        },
  })

  const handleData = (data) => {
    if (dataToEdit?.id) {
      handleUpdateExistingProduct(data.id, data)
    } else {
      handleAddNewProduct(data)
    }
    handleCloseModal()
    handleDataToEdit(null)
  }

  const handleFormEditValues = () => {
    const values = getValues()
    handlePartialEdit(values)
  }

  return (
    <>
      <div className='modal-overlay' />
      <section className='modal'>
        <section className='modal-heading'>
          {dataToEdit?.id ? <h1>Edit Product</h1> : <h1>New Product</h1>}
          <button
            className='close-button'
            name='close button'
            onClick={handleFormEditValues}
          />
        </section>
        {modalErrorMsg && (
          <div>
            <h1>{modalErrorMsg}</h1>
          </div>
        )}
        <form onSubmit={handleSubmit(handleData)}>
          <div className='left-section-container'>
            <label>
              Product name
              <input
                type='text'
                {...register('name', { required: 'Product name required' })}
              />
            </label>
            <p>{errors.name?.message}</p>
            <label>
              SKU
              <input
                type='text'
                {...register('sku', { required: 'SKU required' })}
              />
            </label>
            <p>{errors.sku?.message}</p>
            <label>
              Description
              <textarea
                {...register('description', { required: 'Quantity required' })}
              />
            </label>
            <p>{errors.description?.message}</p>
            <div className='price-quantity-container'>
              <label>
                Price
                <input
                  type='number'
                  {...register('price', { required: 'Price required' })}
                />
              </label>
              <p>{errors.price?.message}</p>
              <label>
                Quantity
                <input
                  type='number'
                  {...register('quantity', { required: 'Quantity required' })}
                />
              </label>
              <p>{errors.quantity?.message}</p>
            </div>
          </div>
          <div className='right-section-container'>
            <label>
              Photo
              <input
                type='text'
                {...register('img', { required: 'Image url required' })}
              />
            </label>
            <p>{errors.img?.message}</p>
            <label>
              Status
              <select
                {...register('status', { required: 'Product status required' })}
              >
                <option value=''></option>
                <option value='In stock'>In stock</option>
                <option value='On order'>On order</option>
                <option value='Low stock'>Low stock</option>
              </select>
            </label>
            <p>{errors.status?.message}</p>
          </div>
          <button type='button' onClick={handleFormEditValues}>
            Cancel
          </button>
          <button type='submit'>Save</button>
        </form>
      </section>
    </>
  )
}

export default NewProductModal
