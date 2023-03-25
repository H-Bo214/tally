import { useForm, Controller } from 'react-hook-form'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'
import placeHolderImg from '../../assets/image-preview.svg'
import Error from '../Error/Error'
import {
  OPTIONS,
  optionLabel,
  registerOptions,
  defaultFormValues,
  customStyles,
} from '../../options'
import Select from 'react-select'
import xIcon from '../../assets/close-button.svg'
import './ProductFormModal.css'
const ProductFormModal = ({
  setFormModalIsOpen,
  handleAddNewProduct,
  handleUpdateExistingProduct,
  handlePartialEdit,
  handleDataToEdit,
  dataToEdit,
  modalErrorMsg,
  setTabIndex,
}) => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    control,
    formState: { errors },
  } = useForm({ defaultValues: dataToEdit ? dataToEdit : defaultFormValues })
  const imageProps = watch(['imgUrl', 'name'])

  const handleData = (data) => {
    if (dataToEdit?.id) {
      handleUpdateExistingProduct(data.id, data)
      setFormModalIsOpen(false)
      handleDataToEdit(null)
      setTabIndex('0')
      return
    }
    handleAddNewProduct(data)
    setFormModalIsOpen(false)
    handleDataToEdit(null)
    setTabIndex('0')
  }

  const handleFormEditValues = () => {
    const values = getValues()
    handlePartialEdit(values)
    setTabIndex('0')
  }

  const handleImgError = (e) => {
    e.target.src = placeHolderImg
  }

  return (
    <>
      <div className='modal-overlay' />
      <section className='modal'>
        <section className='modal-heading'>
          {dataToEdit?.id ? <h1>Edit Product</h1> : <h1>New Product</h1>}
          <button
            className='close-button-x'
            name='close button'
            onClick={handleFormEditValues}
          >
            <img src={xIcon} alt='cancel form icon' />
          </button>
        </section>
        {modalErrorMsg && (
          <div>
            <Error error={modalErrorMsg} />
          </div>
        )}
        {!modalErrorMsg && (
          <form onSubmit={handleSubmit(handleData)}>
            <div className='form-sections-container'>
              <div className='left-section-container'>
                <h2>Information</h2>
                <FormInput
                  name='name'
                  type='text'
                  register={register}
                  validationSchema={{ required: 'Name required' }}
                  errors={errors}
                />
                <FormInput
                  name='sku'
                  type='text'
                  register={register}
                  validationSchema={{ required: 'SKU required' }}
                  errors={errors}
                />
                <FormInput
                  name='description'
                  register={register}
                  validationSchema={{ required: 'Description required' }}
                  errors={errors}
                />
                <div className='price-quantity-container'>
                  <div>
                    <FormInput
                      name='price'
                      type='number'
                      step='any'
                      register={register}
                      errors={errors}
                      className='price-quantity-input'
                      validationSchema={{
                        required: 'Price required',
                        valueAsNumber: true,
                      }}
                    />
                  </div>
                  <div>
                    <FormInput
                      name='quantity'
                      type='number'
                      register={register}
                      errors={errors}
                      className='price-quantity-input'
                      validationSchema={{
                        required: 'Quantity required',
                        valueAsNumber: true,
                      }}
                    />
                  </div>
                </div>
                <label
                  htmlFor='status'
                  className={errors.status?.message && 'label-error-style'}
                >
                  Status
                </label>
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
                      id='status'
                    />
                  )}
                />
                <label
                  htmlFor='status'
                  className={
                    errors.status?.message
                      ? 'form-error-message'
                      : 'form-error-message hidden-style'
                  }
                >
                  {errors.status?.message}
                </label>
              </div>
              <div className='right-section-container'>
                <h2>Photo</h2>
                <FormInput
                  name='imgUrl'
                  type='text'
                  register={register}
                  errors={errors}
                  validationSchema={{
                    required: 'Product image URL required',
                    pattern: {
                      value: /^(ftp|http|https):\/\/[^ "]+$/,
                      message: 'Enter a valid image url',
                    },
                  }}
                />
                <section className='image-preview-container'>
                  <p className='preview-heading'>Preview</p>
                  <div className='image-preview-container'>
                    <img
                      src={imageProps[0] ? imageProps[0] : placeHolderImg}
                      alt={imageProps[0] ? imageProps[1] : 'placeholder'}
                      className='image-preview'
                      onError={handleImgError}
                    />
                  </div>
                </section>
              </div>
            </div>
            <div className='buttons-container-form'>
              <Button
                onClick={handleFormEditValues}
                name='Cancel'
                className='form-button product-form-button-light'
              />
              <Button
                type='submit'
                name='Save'
                className='form-button product-form-button-dark'
              />
            </div>
          </form>
        )}
      </section>
    </>
  )
}

export default ProductFormModal
