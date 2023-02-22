import './Nav.css'
import tallyLogo from '../../assets/tally-logo.svg'

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav-children-container'>
        <section className='title-container'>
          <img src={tallyLogo} alt='Tally inventory tracker logo' />
        </section>
        <ul className='nav-list'>
          <li className='inventory'>Inventory</li>
          <li className='orders'>Orders</li>
          <li className='customers'>Customers</li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
