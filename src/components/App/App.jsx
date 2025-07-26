import { useState } from 'react'
import './App.css'
import Main from '../Main/Main'
import Header from '../Header/Header'
import About from '../About/About'
import Footer from '../Footer/Footer'
import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'
import SuccessModal from '../SuccessModal/SuccessModal'
import { fetchNews, loginUser, registerUser, saveArticles } from '../../api'
import SearchResults from '../SearchResults/SearchResults'
import CurrentUserContext from '../../context/CurrentUserContext'
import { useNavigate } from 'react-router'

function App() {
  const [activeModal, setActiveModal] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState('')
  const [articles, setArticles] = useState([])
  const [showResults, setShowResults] = useState(false)

  const openLoginModal = () => setActiveModal('login')
  const openRegisterModal = () => setActiveModal('register')
  const openSuccessModal = () => setActiveModal('success')
  const closeActiveModal = () => setActiveModal('')

  const navigate = useNavigate()

  const handleLogin = async (email, password) => {
    try {
      const { user, token } = await loginUser(email, password)
      localStorage.setItem('jwt', token)
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

  const handleSearch = async userInput => {
    try {
      const data = await fetchNews(userInput)

      setArticles(data.articles)
      setShowResults(true)
    } catch (err) {
      console.log('Error getting articles:', err)
    }
  }

  const handleLogout = () => {
    try {
      localStorage.removeItem('jwt')
      setUserData('')
      setIsLoggedIn(false)
      navigate('/')
    } catch (err) {
      console.log('Could not log out user:', err)
    }
  }

  const handleSaveArticle = async articleData => {
    try {
      console.log(articleData)
      const savedArticle = await saveArticles(articleData)
      console.log('Article saved:', savedArticle)
    } catch (err) {
      console.log('Could not save article:', err)
    }
  }

  return (
    <CurrentUserContext.Provider value={userData}>
      <div className='page'>
        <div className='page__content'>
          <Header
            onLoginClick={openLoginModal}
            onRegisterClick={openRegisterModal}
            onClose={closeActiveModal}
            isLoggedIn={isLoggedIn}
            onLogoutClick={handleLogout}
          />
          <Main onSearch={handleSearch} />
          {showResults && (
            <SearchResults
              articles={articles}
              isLoggedIn={isLoggedIn}
              onLoginClick={openLoginModal}
              onSave={handleSaveArticle}
            />
          )}
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
    </CurrentUserContext.Provider>
  )
}

export default App
