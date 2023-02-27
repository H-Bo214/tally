const OPTIONS = [
  {
    value: 'In stock',
    label: 'In stock',
    labelColor: '#9BF2B4',
  },
  {
    value: 'Out of stock',
    label: 'Out of stock',
    labelColor: '#E2E1E1',
  },
  {
    value: 'On order',
    label: 'On order',
    labelColor: '#E6F29B',
  },
  {
    value: 'Low stock',
    label: 'Low stock',
    labelColor: '#FF9E9E',
  },
]

const optionLabel = (option) => (
  <div style={{ display: 'flex', caretColor: 'rgba(0,0,0,0)' }}>
    <div
      style={{
        backgroundColor: option.labelColor,
        width: '1.5rem',
        height: '1.5rem',
        borderRadius: '1.5rem',
        marginRight: '1rem',
      }}
    />
    <span>{option.label}</span>
  </div>
)

const registerOptions = {
  status: { required: 'Status is required' },
}

const defaultFormValues = {
  imgUrl: '',
  name: '',
  sku: '',
  description: '',
  price: '',
  quantity: '',
  status: '',
}

const customStyles = {
  option: (provided) => ({
    ...provided,
    borderBottom: '1px solid #DADADA',
    padding: '12px 12px',
    color: '#2B2F32',
  }),
  control: () => ({
    display: 'flex',
    width: '100%',
    dropShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    height: '3.25rem',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#53545C',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'
    return { ...provided, opacity, transition }
  },
  container: (provided) => ({
    ...provided,
    border: '2px solid #92BDFF',
    borderRadius: '0.5rem',
    width: '20rem',
  }),
  menu: (provided) => ({
    ...provided,
    border: '2px solid #92BDFF',
    position: 'fixed',
    top: '50%',
    width: 'inherit',
  }),
  input: (provided) => ({
    ...provided,
    margin: '0',
    padding: '0',
  }),
}

export {
  OPTIONS,
  optionLabel,
  registerOptions,
  defaultFormValues,
  customStyles,
}
