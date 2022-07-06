import { Link } from 'react-router-dom'

import navbarStyles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <ul>
        <li className={navbarStyles.title}>myMoney</li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
      </ul>
    </nav>
  )
}
