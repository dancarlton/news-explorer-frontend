import { useState } from 'react'
import NewsCards from '../NewsCards/NewsCards'
import './SearchResults.css'

export default function SearchResults({ articles }) {
  const [showMore, setShowMore] = useState(false)

  const visibleArticles = showMore ? articles : articles.slice(0, 3)

  return (
    <div className='results'>
      <h1 className='results__title'>Search results</h1>
      <div className='results__cards'>
        {visibleArticles.map((article, index) => (
          <NewsCards article={article} key={index} />
        ))}
      </div>
      {!showMore && articles.length > 3 && (
        <button
          onClick={() => setShowMore(true)}
          className='results__button'
        >
          Show more
        </button>
      )}
    </div>
  )
}
