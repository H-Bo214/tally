import MoonLoader from 'react-spinners/MoonLoader'
import { CSSProperties } from 'react'

const override: CSSProperties = {
  display: 'block',
  margin: '5rem auto',
}

const LoadingSpinner = ({ isLoading }) => {
  return (
    <MoonLoader
      loading={isLoading}
      aria-label='Loading Spinner'
      size={150}
      color='#76ADFF'
      cssOverride={override}
      speedMultiplier={0.5}
    />
  )
}

export default LoadingSpinner
