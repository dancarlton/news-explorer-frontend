import { useState } from 'react'
import './Header.css'
import { Link, NavLink, useLocation } from 'react-router'

export default function Header({ onLoginClick, isLoggedIn }) {
  const { pathname } = useLocation()
  const savedNewsRoute = pathname === '/saved-news'

  return (
    <header
      className={`header ${
        isLoggedIn && savedNewsRoute ? 'header--logged-in' : ''
      }`}
    >
      <div
        className={`header__logo ${
          isLoggedIn && savedNewsRoute
            ? 'header__logo--logged-in'
            : ''
        }`}
      >
        <Link to='/'>NewsExplorer</Link>
      </div>
      <nav
        className={`header__nav ${
          isLoggedIn && savedNewsRoute
            ? 'header__nav--logged-in'
            : ''
        }`}
      >
        {isLoggedIn ? (
          <>
            <NavLink to='/'>
              {({ isActive }) => (
                <span
                  className={`header__nav-item ${
                    isLoggedIn && savedNewsRoute
                      ? 'header__nav-item--logged-in'
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
                      ? 'header__nav-item--logged-in'
                      : ''
                  }${isActive ? ' active' : ''}`}
                >
                  Saved Articles
                </span>
              )}
            </NavLink>
            <button
              className={`header__button--profile ${
                isLoggedIn && savedNewsRoute
                  ? 'header__button--profile header__button--logged-in'
                  : ''
              }`}
            >
              Profile
            </button>
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
