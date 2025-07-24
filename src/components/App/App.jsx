import { useState } from 'react'
import './App.css'
import Main from '../Main/Main'
import Header from '../Header/Header'
import About from '../About/About'
import Footer from '../Footer/Footer'
import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'
import SuccessModal from '../SuccessModal/SuccessModal'
import { loginUser, registerUser } from '../../api'

function App() {
  const [activeModal, setActiveModal] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState()

  const openLoginModal = () => setActiveModal('login')
  const openRegisterModal = () => setActiveModal('register')
  const openSuccessModal = () => setActiveModal('success')
  const closeActiveModal = () => setActiveModal('')

  const handleLogin = async (email, password) => {
    try {
      console.log('Login in user')
      const { user, token } = await loginUser(email, password)
      localStorage.setItem('jwt', token)
      console.log('Successfully logged in user:', user)
      setUserData(user)
      setIsLoggedIn(true)
      setActiveModal('')
      navigate('/')
    } catch (err) {
      console.log('Error logging in user:', err)
    }
  }

  const handleRegister = async (email, password, userName) => {
    try {
      const { user, token } = await registerUser(email, password, userName)
      localStorage.setItem('jwt', token)
      console.log('Successfully registered user', userName)
      setUserData(user)
      setIsLoggedIn(true)
      setActiveModal('success')
    } catch (err) {
      console.log('Error registering user:', err)
    }
  }

  return (
    <div className='page'>
      <div className='page__content'>
        <Header
          onLoginClick={openLoginModal}
          onRegisterClick={openRegisterModal}
          onClose={closeActiveModal}
          isLoggedIn={isLoggedIn}
        />
        <Main />
        <About />
        <Footer />
      </div>

      <LoginModal
        isOpen={activeModal === 'login'}
        onRegisterClick={openRegisterModal}
        onClose={closeActiveModal}
        onLogin={handleLogin}
      />
      <RegisterModal
        isOpen={activeModal === 'register'}
        onLoginClick={openLoginModal}
        onClose={closeActiveModal}
        onRegister={handleRegister}
      />
      <SuccessModal
        isOpen={activeModal === 'success'}
        onLoginClick={openLoginModal}
        onClose={closeActiveModal}
      />
    </div>
  )
}

export default App
