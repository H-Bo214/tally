import MoonLoader from 'react-spinners/MoonLoader'

const LoadingSpinner = ({ isLoading }) => {
  const override = {
    display: 'block',
    margin: '5rem auto',
  }

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
