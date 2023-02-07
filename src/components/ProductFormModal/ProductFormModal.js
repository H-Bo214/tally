import { useForm } from 'react-hook-form'
import './ProductFormModal.css'

const ProductFormModal = ({
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
          <div className='form-sections-container'>
            <div className='left-section-container'>
              <h2>Information</h2>
              <label>
                Product name
                <input
                  type='text'
                  {...register('name', {
                    required: 'Please enter a product name',
                  })}
                />
              </label>
              <p
                className={
                  errors.name?.message
                    ? 'form-error-message'
                    : 'form-error-message hidden-style'
                }
              >
                {errors.name?.message}
              </p>
              <label>
                SKU
                <input
                  type='text'
                  {...register('sku', { required: 'SKU required' })}
                />
              </label>
              <p className='form-error-message'>{errors.sku?.message}</p>
              <label>
                Description
                <textarea
                  {...register('description', {
                    required: 'Description required',
                  })}
                />
              </label>
              <p className='form-error-message'>
                {errors.description?.message}
              </p>
              <div className='price-quantity-container'>
                <div className='label-input-errorMsg-container'>
                  <label>
                    Price
                    <input
                      type='number'
                      {...register('price', { required: 'Price required' })}
                    />
                  </label>
                  <p className='form-error-message'>{errors.price?.message}</p>
                </div>
                <div className='label-input-errorMsg-container'>
                  <label>
                    Quantity
                    <input
                      type='number'
                      {...register('quantity', {
                        required: 'Quantity required',
                      })}
                    />
                  </label>
                  <p className='form-error-message'>
                    {errors.quantity?.message}
                  </p>
                </div>
              </div>
              <label>
                Status
                <select
                  {...register('status', {
                    required: 'Product status required',
                  })}
                >
                  <option value=''></option>
                  <option value='In stock'>In stock</option>
                  <option value='On order'>On order</option>
                  <option value='Low stock'>Low stock</option>
                </select>
              </label>
              <p className='form-error-message'>{errors.status?.message}</p>
            </div>
            <div className='right-section-container'>
              <h2>Photo</h2>
              <label>
                Web address
                <input
                  type='text'
                  {...register('img', { required: 'Image url required' })}
                />
              </label>
              <p className='form-error-message'>{errors.img?.message}</p>
            </div>
          </div>
          <div className='buttons-container-form'>
            <button type='button' onClick={handleFormEditValues}>
              Cancel
            </button>
            <button type='submit'>Save</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default ProductFormModal
