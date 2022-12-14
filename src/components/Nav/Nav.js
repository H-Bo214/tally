import './Nav.css'
import tallyLogo from '../../assets/tally-logo.svg'

const Nav = () => {
  return (
    <nav className='nav'>
      <section className='title-container'>
        <img
          src={tallyLogo}
          alt='Tally inventory tracker logo'
          width='131'
          height='45'
        />
      </section>
      <ul className='nav-list'>
        <li className='inventory'>Inventory</li>
        <li className='orders'>Orders</li>
        <li className='customers'>Customers</li>
      </ul>
    </nav>
  )
}

export default Nav
