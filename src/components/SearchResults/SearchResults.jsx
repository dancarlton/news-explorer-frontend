import { useState } from 'react'
import NewsCards from '../NewsCards/NewsCards'
import './SearchResults.css'

export default function SearchResults({
  articles,
  savedArticles,
  isLoggedIn,
  onLoginClick,
  onArticleSave,
  hideTitle = false,
  disableLimit = false,
}) {
  const [showMore, setShowMore] = useState(false)

  const visibleArticles =
    disableLimit || showMore ? articles || [] : (articles || []).slice(0, 3)

  return (
    <div className='results'>
      {!hideTitle && <h1 className='results__title'>Search results</h1>}
      <div className='results__cards'>
        {visibleArticles.map((article, index) => (
          <NewsCards
            article={article}
            savedArticles={savedArticles}
            key={index}
            isLoggedIn={isLoggedIn}
            onLoginClick={onLoginClick}
            onArticleSave={onArticleSave}
          />
        ))}
      </div>
      {!disableLimit && !showMore && articles.length > 3 && (
        <button onClick={() => setShowMore(true)} className='results__button'>
          Show more
        </button>
      )}
    </div>
  )
}
