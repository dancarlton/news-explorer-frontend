import { useEffect, useState } from 'react'
import './App.css'
import Main from '../Main/Main'
import Header from '../Header/Header'
import About from '../About/About'
import Footer from '../Footer/Footer'
import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'
import SuccessModal from '../SuccessModal/SuccessModal'
import {
  deleteArticle,
  getSavedArticles,
  getUser,
  loginUser,
  registerUser,
  saveArticles,
  searchNews,
} from '../../api'
import SearchResults from '../SearchResults/SearchResults'
import CurrentUserContext from '../../context/CurrentUserContext'
import { Route, Routes, useNavigate } from 'react-router'
import HomePage from '../../pages/HomePage'
import SavedArticlesPage from '../../pages/SavedArticlePage/SavedArticlePage'

function App() {
  const [activeModal, setActiveModal] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState('')
  const [articles, setArticles] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [savedArticles, setSavedArticles] = useState([])

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
      const data = await searchNews(userInput)

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
    const alreadySavedArticle = savedArticles?.some(
      saved => saved.url === articleData.url
    )
    if (alreadySavedArticle) {
      console.log('Article already saved')
      return
    }

    try {
      const savedArticle = await saveArticles(articleData)
      // console.log('Saved article url:', savedArticle.url)
      // console.log('Original article url:', articleData.url)

      setSavedArticles(prev => [...prev, savedArticle])
    } catch (err) {
      console.log('Could not save article:', err)
    }
  }

  const handleDelete = async article => {
    try {
      await deleteArticle(article._id)
      setSavedArticles(prev => prev.filter(saved => saved._id !== article._id))
    } catch (err) {
      console.log('Could not delete article:', err)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if (token) {
      getUser(token)
        .then(user => {
          setUserData(user)
          setIsLoggedIn(true)
        })
        .catch(err => {
          console.log('Token check failed:', err)
          localStorage.removeItem('jwt')
        })
    }
  }, [])

  useEffect(() => {
    const fetchSavedArticles = async () => {
      try {
        const saved = await getSavedArticles()
        setSavedArticles(saved)
      } catch (err) {
        console.log('Could not load saved articles:', err)
      }
    }

    if (isLoggedIn) {
      fetchSavedArticles()
    }
  }, [isLoggedIn])

  return (
    <CurrentUserContext.Provider value={userData}>
      <div className='page'>
        <Header
          onLoginClick={openLoginModal}
          onRegisterClick={openRegisterModal}
          onClose={closeActiveModal}
          isLoggedIn={isLoggedIn}
          onLogoutClick={handleLogout}
        />
        <div className='page__content'>
          <Routes>
            <Route
              path='/'
              element={
                <HomePage
                  onSearch={handleSearch}
                  articles={articles}
                  savedArticles={savedArticles}
                  isLoggedIn={isLoggedIn}
                  onLoginClick={openLoginModal}
                  onArticleSave={handleSaveArticle}
                  showResults={showResults}
                />
              }
            />
            <Route
              path='/saved-news'
              element={
                <SavedArticlesPage
                  articles={articles}
                  savedArticles={savedArticles}
                  isLoggedIn={isLoggedIn}
                  onDeleteClick={handleDelete}
                />
              }
            />
          </Routes>
        </div>
        <Footer />

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
