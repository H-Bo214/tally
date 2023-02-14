import greenDot from '../src/assets/icons/green-dot.svg'
import grayDot from '../src/assets/icons/gray-dot.svg'
import yellowDot from '../src/assets/icons/yellow-dot.svg'
import redDot from '../src/assets/icons/red-dot.svg'

const OPTIONS = [
  { value: 'In stock', label: 'In stock', icon: greenDot },
  { value: 'Out of stock', label: 'Out of stock', icon: grayDot },
  { value: 'On order', label: 'On order', icon: yellowDot },
  { value: 'Low stock', label: 'Low stock', icon: redDot },
]

const optionLabel = (option) => (
  <div className='dot-container'>
    <img src={option.icon} alt='' width='20px' height='20px' />
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
  }),
  menu: (provided) => ({
    ...provided,
    border: '2px solid #92BDFF',
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
