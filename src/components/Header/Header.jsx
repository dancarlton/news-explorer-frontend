import { useState } from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router'

export default function Header({ onLoginClick }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to='/'>NewsExplorer</Link>
      </div>
      <nav className='header__nav'>
        {isLoggedIn ? (
          <>
            <NavLink to='/'>
              {({ isActive }) => (
                <span
                  className={`header__nav-item${isActive ? ' active' : ''}`}
                >
                  Home
                </span>
              )}
            </NavLink>

            <NavLink to='/saved-articles'>
              {({ isActive }) => (
                <span
                  className={`header__nav-item${isActive ? ' active' : ''}`}
                >
                  Saved Articles
                </span>
              )}
            </NavLink>
            <button className='header__profile-button'>Profile</button>
          </>
        ) : (
          <>
            <NavLink to='/'>
              {({ isActive }) => (
                <span
                  className={`header__nav-item${isActive ? ' active' : ''}`}
                >
                  Home
                </span>
              )}
            </NavLink>
            <button className='header__signin-button' onClick={onLoginClick}>
              Sign in
            </button>
          </>
        )}
      </nav>
    </header>
  )
}
