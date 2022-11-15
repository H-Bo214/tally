import { useForm } from 'react-hook-form'
import './NewProductModal.css'

const NewProductModal = ({
  handleCloseModal,
  handleAddNewProduct,
  dataToEdit,
}) => {
  const { register, handleSubmit } = useForm({
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
    handleAddNewProduct(data)
    handleCloseModal()
  }

  return (
    <>
      <div className='modal-overlay' />
      <section className='modal'>
        <section className='modal-heading'>
          <h1>New Product</h1>
          <button
            className='close-button'
            name='close button'
            onClick={handleCloseModal}
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
          <button type='submit'>Save</button>
        </form>
      </section>
    </>
  )
}

export default NewProductModal
