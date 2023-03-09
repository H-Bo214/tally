import './FormInput.css'

const FormInput = ({
  type,
  register,
  name,
  validationSchema,
  errors,
  className,
  step,
}) => {
  const labelName = name.split('')[0].toUpperCase() + name.slice(1)
  return (
    <div className='input-label-container'>
      <label
        htmlFor={name}
        className={errors[name]?.message && 'label-error-style'}
      >
        {name === 'imgUrl' ? 'Image URL' : labelName}
      </label>
      {name === 'description' ? (
        <textarea id={name} {...register(name, validationSchema)} />
      ) : (
        <input
          type={type}
          step={step}
          id={name}
          className={className}
          {...register(name, validationSchema)}
        />
      )}
      <label
        htmlFor={name}
        className={
          errors[name]?.message
            ? 'form-error-message'
            : 'form-error-message hidden-style'
        }
      >
        {errors[name]?.message}
      </label>
    </div>
  )
}

export default FormInput
