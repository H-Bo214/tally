import { useForm } from 'react-hook-form'
import './NewProductModal.css'

const NewProductModal = ({
  handleCloseModal,
  handleAddNewProduct,
  handleUpdateExistingProduct,
  handlePartialEdit,
  dataToEdit,
}) => {
  const { register, handleSubmit, getValues } = useForm({
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
    if (dataToEdit) {
      handleUpdateExistingProduct(data.id, data)
    } else {
      handleAddNewProduct(data)
    }
    handleCloseModal()
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
          {dataToEdit ? <h1>Edit Product</h1> : <h1>New Product</h1>}
          <button
            className='close-button'
            name='close button'
            onClick={handleFormEditValues}
          />
        </section>
        <form onSubmit={handleSubmit(handleData)}>
          <div className='left-section-container'>
            <label>
              Product name
              <input {...register('name')} />
            </label>
            <label>
              SKU
              <input {...register('sku')} />
            </label>
            <label>
              Description
              <textarea {...register('description')} />
            </label>
            <div className='price-quantity-container'>
              <label>
                Price
                <input {...register('price')} />
              </label>
              <label>
                Quantity
                <input {...register('quantity')} />
              </label>
            </div>
          </div>
          <div className='right-section-container'>
            <label>
              Photo
              <input {...register('img')} type='text' />
            </label>
            <label>
              Status
              <select {...register('status')}>
                <option value=''></option>
                <option value='In stock'>In stock</option>
                <option value='On order'>On order</option>
                <option value='Low stock'>Low stock</option>
              </select>
            </label>
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
