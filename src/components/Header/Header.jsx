import { useContext, useState } from 'react'
import './Header.css'
import { Link, NavLink, useLocation } from 'react-router'
import CurrentUserContext from '../../context/CurrentUserContext'

export default function Header({ onLoginClick, isLoggedIn, onLogoutClick }) {
  const user = useContext(CurrentUserContext)
  const { pathname } = useLocation()
  const savedNewsRoute = pathname === '/saved-news'

  return (
    <header
      className={`header ${
        isLoggedIn && savedNewsRoute ? 'header--saved-articles' : ''
      }`}
    >
      <div
        className={`header__logo ${
          isLoggedIn && savedNewsRoute ? 'header__logo--saved-articles' : ''
        }`}
      >
        <Link to='/'>NewsExplorer</Link>
      </div>
      <nav
        className={`header__nav ${
          isLoggedIn && savedNewsRoute ? 'header__nav--saved-articles' : ''
        }`}
      >
        {isLoggedIn ? (
          <>
            <div className='header__center'>
              <NavLink to='/'>
                {({ isActive }) => (
                  <span
                    className={`header__nav-item ${
                      isLoggedIn && savedNewsRoute
                        ? 'header__nav-item--saved-articles'
                        : ''
                    }${isActive ? ' active' : ''}`}
                  >
                    Home
                  </span>
                )}
              </NavLink>

              <NavLink to='/saved-news'>
                {({ isActive }) => (
                  <span
                    className={`header__nav-item ${
                      isLoggedIn && savedNewsRoute
                        ? 'header__nav-item--saved-articles'
                        : ''
                    }${isActive ? ' active' : ''}`}
                  >
                    Saved Articles
                  </span>
                )}
              </NavLink>
            </div>
            <div className='header__button--wrapper'>
              <button onClick={onLogoutClick}
                className={`header__button--signout ${
                  isLoggedIn && savedNewsRoute
                    ? 'header__button--signout--saved-articles'
                    : ''
                }`}
              >
                {user.userName}
                <div
                  className={`header__button--icon ${
                    isLoggedIn && savedNewsRoute
                      ? 'header__button--icon--saved-articles'
                      : ''
                  }`}
                ></div>
              </button>
            </div>
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
            <button className='header__button--signin' onClick={onLoginClick}>
              Sign in
            </button>
          </>
        )}
      </nav>
    </header>
  )
}
