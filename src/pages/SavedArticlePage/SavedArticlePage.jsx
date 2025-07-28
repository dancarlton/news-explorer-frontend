import './SavedArticlePage.css'
import { useContext } from 'react'
import CurrentUserContext from '../../context/CurrentUserContext'
import SearchResults from '../../components/SearchResults/SearchResults'

export default function SavedArticlesPage({ savedArticles, isLoggedIn, onDeleteClick }) {
  const user = useContext(CurrentUserContext)

  const savedArticlesAmount = savedArticles?.length || 0

  return (
    <div className='saved-articles'>
      <div className='saved-articles__content'>
        <p className='saved-articles__title'>Saved articles</p>
        <h1 className='saved-articles__greeting'>
          {user.userName}, you have {savedArticlesAmount} saved articles
        </h1>
        <p className='saved-articles__keywords'>
          By keywords: <strong>{savedArticles.keyword}</strong>{' '}
        </p>
      </div>
      <div className='saved-articles__cards'>
        <SearchResults
          articles={savedArticles}
          savedArticles={savedArticles}
          isLoggedIn={isLoggedIn}
          hideTitle={true}
          disableLimit={true}
          onDeleteClick={onDeleteClick}
        />
      </div>
    </div>
  )
}
