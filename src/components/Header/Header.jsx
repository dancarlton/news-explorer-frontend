import { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to='/'>NewsExplorer</Link>
      </div>
      <nav className='header__nav'>
        {isLoggedIn ? (
          <>
            <Link className='header__nav-item' to='/'>Home</Link>
            <Link className='header__nav-item'>Saved Articles</Link>
            <button className='header__profile-button'>Profile</button>
          </>
        ) : (
          <>
            <Link className='header__nav-item' to='/'>Home</Link>
            <button className='header__signin-button'>Sign in</button>
          </>
        )}
      </nav>
    </header>
  )
}
