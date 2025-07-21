import { useState } from 'react'
import './Header.css'
import { Link } from 'react-router'

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
            <Link to='/'>Home</Link>
            <Link>Saved Articles</Link>
            <button className='header__profile-button'>Profile</button>
          </>
        ) : (
          <>
            <Link to='/'>Home</Link>
            <button className='header__signin-button'>Sign in</button>
          </>
        )}
      </nav>
    </header>
  )
}
