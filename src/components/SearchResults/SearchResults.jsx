import NewsCards from '../NewsCards/NewsCards'
import './SearchResults.css'

export default function SearchResults({ articles }) {
  return (
    <div className='results'>
      <h1 className='results__title'>Search results</h1>
      <div className='results__cards'>
        {articles.map((article, index) => (
          <NewsCards article={article} key={index} />
        ))}
      </div>
    </div>
  )
}
