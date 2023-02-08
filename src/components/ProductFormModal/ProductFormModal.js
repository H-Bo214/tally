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
              <label className={errors.name?.message && 'label-error-style'}>
                Product name
                <input
                  type='text'
                  {...register('name', {
                    required: "Please enter the product's name",
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
              <label className={errors.sku?.message && 'label-error-style'}>
                SKU
                <input
                  type='text'
                  {...register('sku', {
                    required: "Please enter the product's SKU",
                  })}
                />
              </label>
              <p
                className={
                  errors.sku?.message
                    ? 'form-error-message'
                    : 'form-error-message hidden-style'
                }
              >
                {errors.sku?.message}
              </p>
              <label
                className={errors.description?.message && 'label-error-style'}
              >
                Description
                <textarea
                  {...register('description', {
                    required: "Please enter the product's description",
                  })}
                />
              </label>
              <p
                className={
                  errors.description?.message
                    ? 'form-error-message'
                    : 'form-error-message hidden-style'
                }
              >
                {errors.description?.message}
              </p>
              <div className='price-quantity-container'>
                <div className='label-input-errorMsg-container'>
                  <label
                    className={errors.price?.message && 'label-error-style'}
                  >
                    Price
                    <input
                      type='text'
                      {...register('price', {
                        required: "Please enter the product's price",
                      })}
                    />
                  </label>
                  <p
                    className={
                      errors.price?.message
                        ? 'form-error-message'
                        : 'form-error-message hidden-style'
                    }
                  >
                    {errors.price?.message}
                  </p>
                </div>
                <div className='label-input-errorMsg-container'>
                  <label
                    className={errors.quantity?.message && 'label-error-style'}
                  >
                    Quantity
                    <input
                      type='text'
                      {...register('quantity', {
                        required: "Please enter the product's quantity",
                      })}
                    />
                  </label>
                  <p
                    className={
                      errors.quantity?.message
                        ? 'form-error-message'
                        : 'form-error-message hidden-style'
                    }
                  >
                    {errors.quantity?.message}
                  </p>
                </div>
              </div>
              <label className={errors.status?.message && 'label-error-style'}>
                Status
                <select
                  {...register('status', {
                    required: "Please enter the product's status",
                  })}
                >
                  <option value=''></option>
                  <option value='In stock'>In stock</option>
                  <option value='On order'>On order</option>
                  <option value='Low stock'>Low stock</option>
                </select>
              </label>
              <p
                className={
                  errors.status?.message
                    ? 'form-error-message'
                    : 'form-error-message hidden-style'
                }
              >
                {errors.status?.message}
              </p>
            </div>
            <div className='right-section-container'>
              <h2>Photo</h2>
              <label className={errors.img?.message && 'label-error-style'}>
                Web address
                <input
                  type='text'
                  {...register('img', {
                    required: "Please enter the product's image url",
                  })}
                />
              </label>
              <p
                className={
                  errors.img?.message
                    ? 'form-error-message'
                    : 'form-error-message hidden-style'
                }
              >
                {errors.img?.message}
              </p>
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
