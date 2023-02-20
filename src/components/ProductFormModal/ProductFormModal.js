import { useForm, Controller } from 'react-hook-form'
import Button from '../Button/Button'
import {
  OPTIONS,
  optionLabel,
  registerOptions,
  defaultFormValues,
  customStyles,
} from '../../options'
import Select from 'react-select'
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
    control,
    formState: { errors },
  } = useForm({ defaultValues: dataToEdit ? dataToEdit : defaultFormValues })

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
    console.log('values', values)
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
              <label
                htmlFor='product-name'
                className={errors.name?.message && 'label-error-style'}
              >
                Product name
              </label>
              <input
                type='text'
                id='product-name'
                {...register('name', {
                  required: 'Product name required',
                })}
              />
              <p
                className={
                  errors.name?.message
                    ? 'form-error-message'
                    : 'form-error-message hidden-style'
                }
              >
                {errors.name?.message}
              </p>
              <label
                htmlFor='sku'
                className={errors.sku?.message && 'label-error-style'}
              >
                SKU
              </label>
              <input
                type='text'
                id='sku'
                {...register('sku', {
                  required: 'Product SKU required',
                })}
              />
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
                htmlFor='description'
                className={errors.description?.message && 'label-error-style'}
              >
                Description
              </label>
              <textarea
                id='description'
                {...register('description', {
                  required: 'Product description required',
                })}
              />
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
                    htmlFor='price'
                    className={errors.price?.message && 'label-error-style'}
                  >
                    Price
                  </label>
                  <input
                    id='price'
                    type='number'
                    className='price-quantity-input'
                    {...register('price', {
                      required: 'Product price required',
                      valueAsNumber: true,
                    })}
                  />
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
                    htmlFor='quantity'
                    className={errors.quantity?.message && 'label-error-style'}
                  >
                    Quantity
                  </label>
                  <input
                    id='quantity'
                    type='text'
                    className='price-quantity-input'
                    {...register('quantity', {
                      required: 'Product quantity required',
                    })}
                  />
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
              <label>Status</label>
              <Controller
                name='status'
                control={control}
                rules={registerOptions.status}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={OPTIONS}
                    placeholder='Choose an option'
                    styles={customStyles}
                    formatOptionLabel={optionLabel}
                  />
                )}
              />
              <p
                className={
                  errors.status?.message
                    ? 'form-error-message'
                    : 'form-error-message hidden-style'
                }
              >
                {errors?.status?.message}
              </p>
            </div>
            <div className='right-section-container'>
              <h2>Photo</h2>
              <label
                htmlFor='imgUrl'
                className={errors.imgUrl?.message && 'label-error-style'}
              >
                Web address
              </label>
              <input
                id='imgUrl'
                type='text'
                {...register('imgUrl', {
                  required: 'Product image URL required',
                })}
              />
              <p
                className={
                  errors.imgUrl?.message
                    ? 'form-error-message'
                    : 'form-error-message hidden-style'
                }
              >
                {errors.imgUrl?.message}
              </p>
            </div>
          </div>
          <div className='buttons-container-form'>
            <Button onClick={handleFormEditValues} name='Cancel' />
            <Button type='submit' name='Save' />
          </div>
        </form>
      </section>
    </>
  )
}

export default ProductFormModal
