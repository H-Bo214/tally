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
      <ul>
        <li>Inventory</li>
        <li>Orders</li>
        <li>Customers</li>
      </ul>
    </nav>
  )
}

export default Nav
