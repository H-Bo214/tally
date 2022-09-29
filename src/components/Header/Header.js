import './Header.css'
import userImage from '../../assets/user-image.png'

const Header = () => {
  return (
    <header className='header'>
      <img src={userImage} alt='current user' />
      <section className='user-info-container'>
        <h2>Samantha Anderson</h2>
        <p>Tech Warehouse</p>
      </section>
    </header>
  )
}

export default Header
