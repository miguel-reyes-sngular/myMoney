import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

import navbarStyles from './Navbar.module.css'

export const Navbar = () => {
  const { logout } = useLogout()

  return (
    <nav className={navbarStyles.navbar}>
      <ul>
        <li className={navbarStyles.title}>myMoney</li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
        <li>
          <button
            className='btn'
            onClick={logout}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}
